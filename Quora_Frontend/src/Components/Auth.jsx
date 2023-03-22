import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { setLoggedInUserThunkActionCreator } from "../Redux/Actions/loginAction";

function Auth(props) {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const loggedInUser = useSelector((store)=>{
        return store.loggedInUser;
    })

  const dispatch = useDispatch();

  if (user) {
    dispatch(setLoggedInUserThunkActionCreator(user));
  }

  return <>{user ? <Home /> : <Login />}</>;
}

export default Auth;
