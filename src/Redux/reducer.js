const initialState = {
    content: [],
    questions: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "FETCH_CONTENT":
            return {
                ...state,
                content: payload,
            }
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: payload,
            }
        default:
            return state;

    }
}