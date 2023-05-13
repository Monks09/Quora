import { api } from "../../Components/api";

export const getSpacesThunkActionCreator = () => {
    return async (dispatch, getState) => {
        let res = await fetch(`${api}/following`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        let data = await res.json();
        console.log(data);
        dispatch({
            type: 'GET_SPACES',
            payload: data.spaces,
        })
    }
}