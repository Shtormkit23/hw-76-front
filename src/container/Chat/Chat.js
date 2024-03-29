import React, {useEffect} from 'react';
import EnteringMessages from "../../component/EnteringMessages/EnteringMessages";
import './Chat.css'
import {addMessageAction, changeMessageAction, getLastMessages, getMessages} from "../../store/messageActions";
import {useDispatch, useSelector} from "react-redux";
import Messages from "../../component/Messages/Messages";

const Chat = () => {
    const state = useSelector(state => state);
    const posts = useSelector(state => state.posts);
    const datetime = useSelector(state => state.datetime);
    const dispatch = useDispatch();

    const changeMessage = input => {
        dispatch(changeMessageAction(input));
    };

    const addMessage = event => {
        event.preventDefault()
        const messageData = {
            message: state.message,
            author: state.author
        }
        dispatch(addMessageAction(messageData));
    };

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    useEffect(() => {
        let interval = setInterval (() => {
            dispatch(getLastMessages(datetime, posts));
        },2000)
        return () => clearInterval(interval);
    }, [dispatch, datetime, posts]);
    return (
        <div className="chat">
            <div className="messages">
                {state.posts.slice(0).map((message,index) => (
                    <Messages
                        key={index}
                        message={message.message}
                        author={message.author}
                        datetime={message.datetime}
                    />
                ))}
            </div>
            <EnteringMessages
                onSubmit={(event) => addMessage(event)}
                onChange={changeMessage}
                author={state.author}
                message={state.message}
            />
        </div>
    );
};

export default Chat;