import { api } from "../../Components/api";

export const signupThunkActionCreator = (signupData) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetch(`${api}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupData),
            });
            let data = await res.json();
            console.log(data);
            alert("User Registered Successfully");
        } catch (err) {
            console.log(err);
            alert("Signup failed");
        }
    }
}


export const loginThunkActionCreator = (loginData) => {
    return async (dispatch, getState) => {
        try {
            let userData = {
                email: loginData.login_email,
                password: loginData.login_password,
            };

            let res = await fetch(`${api}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            let data = await res.json();
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            dispatch({
                type: "LOGIN_USER",
                payload: data.data.user,
            })
        } catch (err) {
            console.log(err);
            alert("Login failed");
        }
    }
}

export const logoutUserThunkActionCreator = () => {
    return (dispatch, getState) => {
        // clearing user data from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // clearing the user data from redux store
        dispatch({
            type: "LOGOUT_USER"
        })
    }
}

export const setUserThunkActionCreator = (userData) => {
    return (dispatch, getState) => {
        dispatch({
            type: "LOGIN_USER",
            payload: userData,
        })
    }
}