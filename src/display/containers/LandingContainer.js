import React from 'react';
import { connect } from 'react-redux';
import {
	Container, Row, Col
} from 'reactstrap';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
import { getLock } from '../../utility';

const propTypes = {};
const mapStateToProps = state => state;

class Landing extends React.Component {
	componentDidMount() {
		const lock = getLock();
		lock.show();
	}

	render() {
		return (
			<div className="landing-page">
				<div className="content-bg-wrap" />
				<Container>
					<Row>
						<Col lg="6" xs="12">
							<div id="auth0-widget-container" />
						</Col>
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
					</Row>
				</Container>
			</div>
		);
	}
}
Landing.propTypes = propTypes;
export default connect(mapStateToProps)(withPageViewTracker(Landing));
