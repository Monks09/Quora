import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUserThunkActionCreator } from "../Redux/Actions/loginAction";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.loggedInUser;
  });

  useEffect(() => {
    if (!user) {
      const userData = JSON.parse(localStorage.getItem("user")) || null;
      if (userData) {
        dispatch(setUserThunkActionCreator(userData));
      }
    }
  }, []);

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
