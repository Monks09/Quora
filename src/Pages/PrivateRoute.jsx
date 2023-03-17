import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { user } from "../Api/Url";
function PrivateRoute({ children }) {
  let token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default PrivateRoute;
