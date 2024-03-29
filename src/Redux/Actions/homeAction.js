import { api } from "../../Components/api";

export const getContentThunkActionCreator = (page) => {
    return (dispatch, getState) => {
        fetch(`${api}/posts?page=${page}&limit=3`, {
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
                    payload: data.posts,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
}