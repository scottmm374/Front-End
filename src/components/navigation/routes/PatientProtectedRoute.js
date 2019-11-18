import React from "react";
import { Route, Redirect } from "react-router-dom";

function PatientProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("token")) {
          // Logged-in in so render component as usual
          return <Component {...renderProps} {...rest} />;
        } else {
          // If not logged in redirect to login
          return <Redirect to="/patient-login" />;
        }
      }}
    />
  );
}

export default PatientProtectedRoute;
