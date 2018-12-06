import React from 'react';
import {
	Label, Container, Row, Col
} from 'reactstrap';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';

const Landing = () => (
	<div className="landing-page">
		<div className="content-bg-wrap" />
		<Container>
			<Row className="display-flex">
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
					<div className="registration-login-form">
						<div className="title h6">Register with Pipeline</div>
						<form className="content">
							<div className="row">
								<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group label-floating">
										<Label className="control-label" htmlFor="username">Your Username</Label>
										<input id="username" className="form-control" placeholder="" type="text" />
									</div>
								</div>
								<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group label-floating">
										<Label className="control-label" htmlFor="email">Your Email</Label>
										<input id="email" className="form-control" placeholder="" type="email" />
									</div>
									<div className="form-group label-floating">
										<Label htmlFor="password" className="control-label">Your Password</Label>
										<input className="form-control" placeholder="" type="password" />
									</div>

									<div className="form-group date-time-picker label-floating">
										<Label htmlFor="dob" className="control-label">Your Birthday</Label>
										<input id="dob" name="datetimepicker" value="10/24/1984" />
									</div>

									<a href="/" className="btn btn-purple btn-lg full-width">Complete Registration!</a>
								</div>
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
);

export default withPageViewTracker(Landing);
