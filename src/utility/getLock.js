import moment from 'moment';
import Auth0Lock from 'auth0-lock';

export default function getLock() {
	const lock = new Auth0Lock(PIPELINE_AUTH0_CLIENT_ID, PIPELINE_AUTH0_DOMAIN, {
		allowAutocomplete: true,
		allowShowPassword: true,
		allowedConnections: ['Username-Password-Authentication'],
		autoclose: true,
		additionalSignUpFields: [{
			type: 'date',
			name: 'dob',
			placeholder: 'date of birth (mm/dd/yyyy)',
			validator: dob => ({
				valid: moment(dob, 'MM/DD/YYYY', true).isValid(),
				hint: 'You must enter a valid date.'
			}),
			icon: '/img/calendar.png'
		}],
		auth: {
			redirectUrl: PIPELINE_AUTH0_CALLBACK_URL,
			audience: PIPELINE_AUTH0_AUDIENCE,
			responseType: 'token id_token',
			params: {
				scope: 'openid'
			}
		},
		avatar: null,
		languageDictionary: {
			emailInputPlaceholder: 'you@youremail.com',
			title: 'Log In',
			signUpTitle: 'Join Pipeline'
		},
		container: 'auth0-widget-container',
		theme: {
			logo: '/img/logo.png',
			primaryColor: '#34025d'
		},
		initialScreen: 'signUp'
	});
	return lock;
}
