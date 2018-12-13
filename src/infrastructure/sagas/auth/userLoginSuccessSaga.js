import { takeEvery } from 'redux-saga/effects';
import { USER_LOGIN_SUCCESS } from '../../actions';
import cache from '../../cache';
import { navigation } from '../../../utility/history';
import cacheKeys from '../../constants/cacheKeys';

function* userLoginSuccess(action) {
	const authResult = action.data;
	cache.set(cacheKeys.ACCESS_TOKEN, authResult.accessToken);
	navigation.navigateTo('/');
}

export default function* userLoginSuccessSaga() {
	yield takeEvery(USER_LOGIN_SUCCESS, userLoginSuccess);
}
