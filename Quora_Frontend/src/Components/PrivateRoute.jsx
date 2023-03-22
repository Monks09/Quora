import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = useSelector((store)=>{
    return store.loggedInUser;
  })

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
