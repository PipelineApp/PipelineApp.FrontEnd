import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER, fetchedUserSuccess, fetchedUserFailure } from '../../actions';


function* fetchUser() {
	try {
		const response = yield call(axios.get, `${PIPELINE_BACKEND_API_HOST}/api/private`);
		yield put(fetchedUserSuccess(response.data));
	} catch (e) {
		yield put(fetchedUserFailure());
	}
}

export default function* fetchUserSaga() {
	yield takeEvery(FETCH_USER, fetchUser);
}
