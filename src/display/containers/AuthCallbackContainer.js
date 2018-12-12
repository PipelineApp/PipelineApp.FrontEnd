import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLock } from '../../utility';
import * as actions from '../../infrastructure/actions';

const propTypes = {
	userLoginSuccess: PropTypes.func.isRequired
};
class AuthCallbackContainer extends React.Component {
	componentDidMount() {
		const lock = getLock();
		lock.on('authenticated', (authResult) => {
			const { userLoginSuccess } = this.props;
			userLoginSuccess(authResult);
		});
	}

	render() {
		return (<span />);
	}
}
AuthCallbackContainer.propTypes = propTypes;
export default connect(() => { }, {
	userLoginSuccess: actions.userLoginSuccess
})(AuthCallbackContainer);
