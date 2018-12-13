import axios from 'axios';
import promise from 'promise';
import auth0 from 'auth0-js';
import cache from './cache';
import cacheKeys from './constants/cacheKeys';
import { SUBMIT_USER_LOGOUT, SET_MAINTENANCE_MODE_ON } from './actions';

const whitelist = [
	'api/auth'
];
const refreshSubscribers = [];
const auth0Lib = new auth0.WebAuth({
	domain: PIPELINE_AUTH0_DOMAIN,
	clientID: PIPELINE_AUTH0_CLIENT_ID,
	redirectUri: PIPELINE_AUTH0_CALLBACK_URL,
	audience: PIPELINE_AUTH0_AUDIENCE,
	responseType: 'token id_token',
	scope: 'openid profile'
});
let isRefreshing = false;

function isPathInWhitelist(url) {
	return whitelist.some(path => url.indexOf(path) >= 0);
}
function subscribeTokenRefresh(cb) {
	refreshSubscribers.push(cb);
}
function onTokenRefreshed(token) {
	refreshSubscribers.map(cb => cb(token));
}
function refreshAccessToken(error, store) {
	try {
		auth0Lib.checkSession({}, (err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				cache.set(cacheKeys.ACCESS_TOKEN, authResult.accessToken);
			} else {
				store.dispatch({ type: SUBMIT_USER_LOGOUT });
			}
		});
	} catch (e) {
		store.dispatch({ type: SUBMIT_USER_LOGOUT });
	}
}
function setAuthHeader(config) {
	if (isPathInWhitelist(config.url)) {
		return config;
	}
	const accessToken = cache.get(cacheKeys.ACCESS_TOKEN);
	if (accessToken) {
		if (config.method !== 'OPTIONS') {
			// eslint-disable-next-line no-param-reassign
			config.headers.authorization = `Bearer ${accessToken}`;
		}
	}
	return config;
}
function handleUnauthorizedRequest(error, originalRequest, store) {
	// start token refresh if it isn't already in process
	if (!isRefreshing) {
		isRefreshing = true;
		refreshAccessToken(error, store)
			.then(() => {
				isRefreshing = false;
				onTokenRefreshed();
			});
	}

	// add request to list to be re-executed when token refresh is complete
	const retryOrigReq = new Promise((resolve) => {
		subscribeTokenRefresh(() => {
			const token = cache.get(cacheKeys.ACCESS_TOKEN);
			const newRequest = {
				headers: { authorization: `Bearer ${token}` },
				...originalRequest
			};
			resolve(axios(newRequest));
		});
	});
	return retryOrigReq;
}

export default {
	setupInterceptors: (store) => {
		axios.interceptors.request.use(setAuthHeader, error => promise.reject(error));
		axios.interceptors.response.use(response => response, (error) => {
			const { config } = error;
			if (error.response.status === 503) {
				store.dispatch({ type: SET_MAINTENANCE_MODE_ON });
				return Promise.reject(error);
			}
			if (error.response.status === 401 && !isPathInWhitelist(error.config.url)) {
				return handleUnauthorizedRequest(error, config, store);
			}
			return Promise.reject(error);
		});
	}
};
