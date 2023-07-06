import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  return props.isLogged ? (
    <Component {...props}></Component>
  ) : (
    <Navigate to="/" replace></Navigate>
  );
}

export default ProtectedRoute;
