import { takeEvery } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS } from "../../actions";
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';

function* userLoginSuccess(action) {
	const authResult = action.data;
	cache.set(cacheKeys.ACCESS_TOKEN, authResult.accessToken);
	cache.set(cacheKeys.REFRESH_TOKEN, authResult.refreshToken);
	console.log(cache.get(cacheKeys.ACCESS_TOKEN));
	console.log(cache.get(cacheKeys.REFRESH_TOKEN));
}


export default function* userLoginSuccessSaga() {
	yield takeEvery(USER_LOGIN_SUCCESS, userLoginSuccess);
}
