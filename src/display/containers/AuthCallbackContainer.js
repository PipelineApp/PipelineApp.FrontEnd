import React from 'react';
import { connect } from 'react-redux';

class AuthCallbackContainer extends React.Component {
	componentDidMount() {
		console.log(this.props.location);
	}

	render() {
		return (<span />);
	}
}

export default connect()(AuthCallbackContainer);
