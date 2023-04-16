const initialState = {
    content: [],
    questions: [],
    loggedInUser: null,
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "GET_CONTENT":
            return {
                ...state,
                content: [...state.content, ...payload],
            }
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: payload,
            }
        case "LOGIN_USER":
            return {
                ...state,
                loggedInUser: payload,
            }
        case "LOGOUT_USER":
            return {
                ...state,
                loggedInUser: null,
            }
        default:
            return state;

    }
}