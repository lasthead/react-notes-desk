import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const LoginRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      render={(props) =>
        !isAuth ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            {...props}
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

export default LoginRoute
