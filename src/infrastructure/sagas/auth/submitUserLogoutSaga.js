import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';
import { navigation } from '../../../utility/history';

import {
	SUBMIT_USER_LOGOUT
} from '../../actions';

function* submitUserLogout() {
	try {
		const redirect = encodeURIComponent(`${window.location.origin}/landing`);
		cache.clear();
		const url = `https://${PIPELINE_AUTH0_DOMAIN}/v2/logout?returnTo=${redirect}&client_id=${PIPELINE_AUTH0_CLIENT_ID}`;
		console.log(url);
		navigation.navigateExternal(url);
	} catch (e) {
		// eslint-disable-next-line no-empty
	}
}

export default function* submitUserLogoutSaga() {
	yield takeEvery(SUBMIT_USER_LOGOUT, submitUserLogout);
}
