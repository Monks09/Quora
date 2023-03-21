export const addNewQuestionThunkActionCreator = (quesData) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetch(` http://localhost:8080/questions/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(quesData)
            });
            let data = await res.json();
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const addNewPostThunkActionCreator = (postData) => {
    return async (dispatch, getState) => {
        try {
            let res = await fetch(`http://localhost:8080/posts/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(postData)
            });
            let data = await res.json();
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
}