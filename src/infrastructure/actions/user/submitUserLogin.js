import analytics from '../../constants/analytics';

export const SUBMIT_USER_LOGIN = 'SUBMIT_USER_LOGIN';
export function submitUserLogin() {
	return {
		type: SUBMIT_USER_LOGIN,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Logged in'
			}
		}
	};
}
