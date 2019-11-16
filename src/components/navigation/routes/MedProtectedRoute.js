import React from "react";
import { Route, Redirect } from "react-router-dom";

function MedProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("medtoken")) {
          return <Component {...renderProps} {...rest} />;
        } else {
          return <Redirect to="/med-signin" />;
        }
      }}
    />
  );
}

export default MedProtectedRoute;
