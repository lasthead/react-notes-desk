import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const LoginRoute = ({ component: Component, isAuth }) => {
  return (
    <Route
      render={props =>
        !isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
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
