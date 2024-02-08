import React, { Component } from 'react';


function WithLogging ({ wrappedComponent }) {

    const getComponentName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class WithLogging extends Component {
        componentDidMount () {
            console.log(`Component ${getComponentName(wrappedComponent)} is mounted`);
        }

        componentWillUnmount () {
            console.log(`Component ${getComponentName(wrappedComponent)} is going to unmount`);
        }

        render () {
            return (
                <wrappedComponent { ...this.props } />
            );
        }
    }

    WithLogging.displayName = `WithLogging(${getComponentName(wrappedComponent)})`;
    return WithLogging;
}

export default WithLogging;
