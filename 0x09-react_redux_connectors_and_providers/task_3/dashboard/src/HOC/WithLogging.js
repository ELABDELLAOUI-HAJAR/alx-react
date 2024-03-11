import React, { Component } from 'react';

function WithLogging(WrappedComp) {
	class WithLogging extends Component {
		componentDidMount() {
			console.log(`Component ${getCompName(WrappedComp)} is mounted`);
		}
		componentWillUnmount() {
			console.log(`Component ${getCompName(WrappedComp)} is going to unmount`);
		}
		render() {
			return <WrappedComp {...this.props} />;
		}
	}
	WithLogging.displayName = `WithLogging(${getCompName(WrappedComp)})`;
	return WithLogging;
}

function getCompName(WrappedComp) {
	return WrappedComp.displayName || WrappedComp.name || 'Component';
}

export default WithLogging;
