import React from 'react';
import {
	Label, Container, Row, Col
} from 'reactstrap';
import Auth0Lock from 'auth0-lock';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';

class Landing extends React.Component {
	constructor() {
		super();
		this.lock = new Auth0Lock(PIPELINE_AUTH0_CLIENT_ID, PIPELINE_AUTH0_DOMAIN, {
			allowAutocomplete: true,
			allowShowPassword: true,
			allowedConnections: ['Username-Password-Authentication'],
			autoclose: true,
			auth: {
				redirectUrl: PIPELINE_AUTH0_CALLBACK_URL,
				responseType: 'token id_token',
				params: {
					scope: 'openid'
				}
			},
			avatar: null,
			languageDictionary: {
				emailInputPlaceholder: 'you@youremail.com',
				title: 'Join Pipeline'
			},
			container: 'auth0-widget-container',
			theme: {
				logo: '/img/logo.png',
				primaryColor: '#34025d'
			},
			initialScreen: 'signUp'
		});
	}

	componentDidMount() {
		this.lock.show();
	}

	render() {
		return (
			<div className="landing-page">
				<div className="content-bg-wrap" />
				<Container>
					<Row>
						<Col lg="6" xs="12">
							<div className="landing-content">
								<h1>Follow Your Interests Your Way</h1>
								<p>
									Join a community of fans, writers, artists, and other creators{' '}
									building a bigger, more interesting internet every day.
								</p>
								<p>
									Switch between &quot;Pipes&quot; of content you follow based on what{' '}
									interests you.
								</p>
								<p>
									Post under as many personas as you want -- artist, RP character, science geek,
									news blog, or even just your own thoughts on the world.
								</p>
							</div>
						</Col>

						<Col lg="6" xs="12">
							<div id="auth0-widget-container" />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default withPageViewTracker(Landing);
