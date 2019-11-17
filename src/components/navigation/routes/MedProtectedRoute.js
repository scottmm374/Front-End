import React from "react";
import { Route, Redirect } from "react-router-dom";

function MedProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        // Logged-in in so render component as usual
        if (localStorage.getItem("medtoken")) {
          return <Component {...renderProps} {...rest} />;
        } else {
          // If not logged in redirect to login
          return <Redirect to="/med-login" />;
        }
      }}
    />
  );
}

export default MedProtectedRoute;
