import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({
   component: Component,
   render,
   authUser,
   noAuthOnly,
   authOnly,
   ...rest
 }) => (
  <Route
    {...rest}
    render={props => {
      const {
        location: { pathname, state }
      } = props;
      const hasAuth = !!authUser;
      if (noAuthOnly && hasAuth) {
        const redirectPath =
          state && state.nextPathname ? state.nextPathname : "/";
        return <Redirect to={{ pathname: redirectPath }} />;
      } else if (authOnly && !hasAuth) {
        return (
          <Redirect
            {...props}
            to={{ pathname: "/auth/login", state: { nextPathname: pathname } }}
          />
        );
      } else {
        if (Component) {
          return <Component {...rest} {...props} authUser={authUser} />;
        }
        return render(props);
      }
    }}
  />
);

export default AuthRoute;
