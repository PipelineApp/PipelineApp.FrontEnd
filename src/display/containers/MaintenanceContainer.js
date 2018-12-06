import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';

const Maintenance = () => (
	<section className="page-500-content medium-padding120">
		<Container>
			<Row>
				<Col lg="7" xs="12">
					<img src="/img/500.png" alt="error_500" />
				</Col>
				<Col xs="12" lg="5">
					<div className="crumina-module crumina-heading">
						<h1 className="page-500-sup-title">503</h1>
						<h2 className="h1 heading-title">Down for Maintenance</h2>
						<p className="heading-text">Check out{' '}
							<a href="https://twitter.com/AppPipeline">our Twitter</a> for more information,{' '}
							or check back later to see what we&apos;ve updated!
						</p>
					</div>
					<a href="index.html" className="btn btn-primary btn-lg">Go to Homepage</a>
				</Col>
			</Row>
		</Container>
	</section>
);

export default withPageViewTracker(Maintenance);
