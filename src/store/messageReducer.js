import {ADD_MESSAGE_SUCCESS, CHANGE_TEXT, GET_LAST_MESSAGES, GET_MESSAGES} from "./actionTypes";

const initialState = {
    author: '',
    message: '',
    posts: [],
    datetime:''
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_SUCCESS:
            const author = 'author'
            const message = 'message'
            return {
                ...state,
                [author]: '',
                [message]: ''
            };
        case GET_MESSAGES:
            const posts = 'posts'
            return {
                ...state,
                [posts]: action.data,
                datetime: action.datetime
            };
        case GET_LAST_MESSAGES:
            const post = 'posts'
            return {
                ...state,
                [post]: action.data,
                datetime: action.datetime
            };
        case CHANGE_TEXT:
            return {
                ...state,
                [action.input.target.name]: action.input.target.value
            };
        default:
            return state;
    }
};


export default messageReducer;