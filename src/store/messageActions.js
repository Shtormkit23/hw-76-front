import axiosApi from "../axiosApi";
import {ADD_MESSAGE_SUCCESS, CHANGE_TEXT, GET_LAST_MESSAGES, GET_MESSAGES} from "./actionTypes";

const addMessageSuccess = data => {
    return {type: ADD_MESSAGE_SUCCESS, data};
};

const getMessagesAction = (data, datetime) => {
    return {type: GET_MESSAGES, data, datetime};
};

const getLastMessagesAction = (data, datetime) => {
    return {type: GET_LAST_MESSAGES, data, datetime};
};

export const getMessages = () => {
    return dispatch => {
        return axiosApi.get("/messages").then(response => {
            const datetime = response.data[response.data.length-1].datetime;
            dispatch(getMessagesAction(response.data, datetime));
        }).catch((error) => {
            console.log(error)
        });
    };
};

export const getLastMessages = (datetime, data) => {
    return async (dispatch) => {
        try {
            const response = await axiosApi.get(`/messages${datetime}`);
            if (data.length === 0) {
                data = response.data
            } else {
                // response.data.map(message => data.push(message))
                console.log(response.data);
            }
            dispatch(getLastMessagesAction(datetime, data));
        } catch (e) {
            console.log(e);
        }
    };
};


export const addMessageAction = messageData => {
    return dispatch => {
        return axiosApi.post("/messages", messageData).then(response => {
            dispatch(addMessageSuccess(response.data));
        }).catch((error) => {
            alert(error.request.responseText);
        });
    };
};

export const changeMessageAction = input => {
    return {type: CHANGE_TEXT, input};
};


