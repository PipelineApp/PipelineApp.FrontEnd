import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	Container, Row, Col
} from 'reactstrap';
import * as actions from '../../infrastructure/actions';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';

const propTypes = {
	showAuth0Lock: PropTypes.func.isRequired
};
const mapStateToProps = state => state;

class Landing extends React.Component {
	componentDidMount() {
		const { showAuth0Lock } = this.props;
		showAuth0Lock();
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
Landing.propTypes = propTypes;
export default connect(mapStateToProps, {
	showAuth0Lock: actions.showAuth0Lock
})(withPageViewTracker(Landing));
