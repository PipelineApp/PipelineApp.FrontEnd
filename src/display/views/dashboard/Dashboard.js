import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../infrastructure/actions';

const propTypes = {
	submitUserLogout: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	user: PropTypes.shape({}).isRequired
};
const mapStateToProps = state => ({
	user: state.user
});

class Dashboard extends React.Component {
	componentDidMount() {
		const { user, fetchUser } = this.props;
		if (!user || !user.claims) {
			fetchUser();
		}
	}

	render() {
		const { submitUserLogout } = this.props;
		return (
			<div>
				Dashboard
				<button type="button" onClick={submitUserLogout}>Log Out</button>
			</div>
		);
	}
}
Dashboard.propTypes = propTypes;
export default connect(mapStateToProps, {
	submitUserLogout: actions.submitUserLogout,
	fetchUser: actions.fetchUser
})(Dashboard);
