import { api } from "../../Components/api";

export const getQuestionsThunkActionCreator = () => {

    return async (dispatch, getState) => {
        let res = await fetch(`${api}/questions`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        let data = await res.json();
        console.log(data);
        dispatch({
            type: "GET_QUESTIONS",
            payload: data.questions,
        })

    }
}