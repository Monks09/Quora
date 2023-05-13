import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { setUserThunkActionCreator } from "../Redux/Actions/loginAction";

function Auth(props) {
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

  return <>{user ? <Home /> : <Login />}</>;
}

export default Auth;
