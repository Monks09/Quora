import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setLoggedInUserThunkActionCreator } from "../Redux/Actions/loginAction";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const loggedInUser = useSelector((store) => {
    return store.loggedInUser;
  });

  if (user) {
    dispatch(setLoggedInUserThunkActionCreator(user));
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
