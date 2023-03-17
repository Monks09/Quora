export const getContentThunkActionCreator = () => {
    return (dispatch, getState) => {
        fetch(`http://localhost:8080/content`, {
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
                    type: "FETCH_CONTENT",
                    payload: data.content,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
}