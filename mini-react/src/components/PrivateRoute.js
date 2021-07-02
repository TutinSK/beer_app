import React from 'react';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
PrivateRoute.propTypes = {

};

function PrivateRoute({ children, ...rest }) {
    console.log()
    const authFakeLocal = localStorage.getItem('user');
    var tamp = true
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authFakeLocal != null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;