import React from "react";
import { Route, Redirect } from "react-router-dom";

function PatientProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} {...rest} />;
        } else {
          return <Redirect to="/patient-login" />;
        }
      }}
    />
  );
}

export default PatientProtectedRoute;
