import React, { Component } from 'react';

function WithLogging (WrappedComponent) {
    const getComponentName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class WithLogging extends Component {
        componentDidMount () {
            console.log(`Component ${getComponentName(WrappedComponent)} is mounted`);
        }
        componentWillUnmount () {
            console.log(`Component ${getComponentName(WrappedComponent)} is going to unmount`);
        }
        render () {
            return <WrappedComponent { ...this.props } />;
        }
    }
    WithLogging.displayName = `WithLogging(${getComponentName(WrappedComponent)})`;
    return WithLogging;
}

export default WithLogging;
