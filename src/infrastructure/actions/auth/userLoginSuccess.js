import analytics from '../../constants/analytics';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export function userLoginSuccess(data) {
	return {
		type: USER_LOGIN_SUCCESS,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Logged in'
			}
		}
	};
}
