import { FETCHED_USER_FAILURE, FETCHED_USER_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

const defaultState = {};
function user(state = defaultState, action) {
	switch (action.type) {
		case FETCHED_USER_SUCCESS:
			return { claims: action.data };
		case FETCHED_USER_FAILURE:
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default user;
