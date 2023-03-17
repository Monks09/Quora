import { useContext } from "react";
import loginContext from "../Context/Context";
import Login from "../../Pages/Login/Login";
import Home from "../Home/Home";

export default function Auth() {
    const token = localStorage.getItem("token");

    return <div>
        {token ? <Home /> : <Login />}
    </div>
}