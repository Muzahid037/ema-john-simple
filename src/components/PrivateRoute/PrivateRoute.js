import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <></>;
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    user.displayName ? children
                        :
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        >

                        </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;