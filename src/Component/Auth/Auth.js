import { useContext } from "react";
import loginContext from "../Context/Context";
import Login from "../../Pages/Login/Login";
import Home from "../Home/Home";

export default function Auth() {
    const { state } = useContext(loginContext);

    return <div>
        {state.isLoggedIn ? <Home /> : <Login />}
    </div>
}