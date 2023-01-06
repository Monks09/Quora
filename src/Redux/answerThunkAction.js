export default function answerThunkActionCreater(url) {

    return function answerThunkAction(dispatch, getState) {
        if (getState().answer.length === 0) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    dispatch({
                        type: "GET_QUESTIONS",
                        payload: data
                    })
                })
        }
    }
}