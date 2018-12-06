import React from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import 'react-redux-toastr/src/styles/index.scss';
import 'rc-tooltip/assets/bootstrap.css';

import '../scss/style.scss';
// import history from './utility/history';
// import * as actions from './infrastructure/actions';

const propTypes = {
};

function mapStateToProps() {
	return {};
}

const App = () => (<span>Hello World</span>);

App.propTypes = propTypes;
export default connect(mapStateToProps)(App);
