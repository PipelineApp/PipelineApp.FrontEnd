import React from 'react';
import { Switch, Route } from 'react-router-dom';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
import Dashboard from '../views/dashboard/Dashboard';

const Layout = () => (
	<div>
		<Switch>
			<Route path="/dashboard" name="Dashboard" component={Dashboard} />
		</Switch>
	</div>
);

export default withPageViewTracker(Layout);
