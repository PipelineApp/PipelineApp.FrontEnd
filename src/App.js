import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
import history from './utility/history';
// import * as actions from './infrastructure/actions';
import LandingContainer from './display/containers/LandingContainer';
import LayoutContainer from './display/containers/LayoutContainer';
import MaintenanceContainer from './display/containers/MaintenanceContainer';
import AuthCallbackContainer from './display/containers/AuthCallbackContainer';

const propTypes = {
	isMaintenanceMode: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		isMaintenanceMode: ui.isMaintenanceMode
	};
}

const App = (props) => {
	const { isMaintenanceMode } = props;
	if (isMaintenanceMode) {
		return (
			<Router history={history}>
				<Route path="*" name="Maintenance" component={MaintenanceContainer} />
			</Router>
		);
	}
	return (
		<Router history={history}>
			<Switch>
				<Route
					path="/maintenance"
					name="Maintenance"
					component={MaintenanceContainer}
				/>
				<Route
					path="/landing"
					name="Landing"
					component={LandingContainer}
				/>
				<Route
					path="/auth-callback"
					name="Auth Callback"
					component={AuthCallbackContainer}
				/>
				<Route component={LayoutContainer} />
			</Switch>
		</Router>
	);
};
App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
