import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../infrastructure/actions';

const propTypes = {
	submitUserLogout: PropTypes.func.isRequired
};
const mapStateToProps = state => state;
const Dashboard = (props) => {
	const { submitUserLogout } = props;
	return (
		<div>
			Dashboard
			<button type="button" onClick={submitUserLogout}>Log Out</button>
		</div>
	);
}
Dashboard.propTypes = propTypes;
export default connect(mapStateToProps, {
	submitUserLogout: actions.submitUserLogout
})(Dashboard);
