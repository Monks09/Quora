import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { setLoggedInUserThunkActionCreator } from "../Redux/Actions/loginAction";

function Auth(props) {
  const user = useSelector((store) => {
    return store.loggedInUser;
  });

  return <>{user ? <Home /> : <Login />}</>;
}

export default Auth;
