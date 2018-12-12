import { takeEvery } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS } from '../../actions';
import cache from '../../cache';
import { navigation } from '../../../utility/history';
import cacheKeys from '../../constants/cacheKeys';

function* userLoginSuccess(action) {
	const authResult = action.data;
	console.log(authResult);
	cache.set(cacheKeys.ACCESS_TOKEN, authResult.accessToken);
	cache.set(cacheKeys.REFRESH_TOKEN, authResult.refreshToken);
	navigation.navigateTo('/test');
}


export default function* userLoginSuccessSaga() {
	yield takeEvery(USER_LOGIN_SUCCESS, userLoginSuccess);
}
