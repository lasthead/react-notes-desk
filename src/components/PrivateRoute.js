import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      render={props =>
        isAuth ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            {...props}
            to={{
            pathname: '/auth/login',
            state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

export default PrivateRoute
