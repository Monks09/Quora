export const signupThunkActionCreator = (signupData) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetch(`http://localhost:8080/users/register`, {
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


export const loginThunkActionCreator = (loginData, navigate) => {
    return async (dispatch, getState) => {
        try {
            let userData = {
                email: loginData.login_email,
                password: loginData.login_password,
            };

            let res = await fetch(`http://localhost:8080/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            let data = await res.json();
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            dispatch(setLoggedInUserThunkActionCreator(data.data.user));
        } catch (err) {
            console.log(err);
            alert("Login failed");
        }
    }
}


export const setLoggedInUserThunkActionCreator = (user) => {
    return async (dispatch, getState) => {
        dispatch({
            type: "SET_LOGGED_IN_USER",
            payload: user,
        })
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