// #region imports
import {
	SET_MAINTENANCE_MODE_ON,
	SUBMIT_USER_LOGOUT
} from '../actions';
// #endregion imports

const defaultState = {
	isMaintenanceMode: false
};

function ui(state = defaultState, action) {
	switch (action.type) {
		case SET_MAINTENANCE_MODE_ON:
			return Object.assign({}, state, {
				isMaintenanceMode: true
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default ui;
