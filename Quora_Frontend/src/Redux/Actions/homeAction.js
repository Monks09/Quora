export const getContentThunkActionCreator = (page) => {
    return (dispatch, getState) => {
        fetch(`http://localhost:8080/content?page=${page}&limit=3`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: "GET_CONTENT",
                    payload: data.content,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
}