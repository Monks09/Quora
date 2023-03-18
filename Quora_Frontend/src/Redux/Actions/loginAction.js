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


export const loginThunkActionCreator = (loginData) => {
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