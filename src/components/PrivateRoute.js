import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
    render() {
        const isAuthenticated = localStorage.getItem("token");

        if (isAuthenticated) {
            const Component = this.props.component;

            return <Component { ...this.props} />;
        }
        return <Redirect to = {'/login'}/>;

    }
}

export default  PrivateRoute