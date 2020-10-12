import React from "react";
import './EnteringMessages.css';

const EnteringMessages = props => (
    <form onSubmit={props.onSubmit}>
        <div className="form-group">
            <div className="column-1">
                <input
                    name="author"
                    type="text"
                    value={props.author}
                    onChange={props.onChange}
                    className="form-control author-input"
                    placeholder="Имя" id="author"/>
            </div>
            <div className="column-2">
                <textarea
                    name="message"
                    className="form-control message-form message-input"
                    placeholder="Текст сообщения"
                    value={props.message}
                    onChange={props.onChange}
                    id="message-form"/>
            </div>
        </div>
        <button type="submit" className="btn-send" id="button">Send</button>
    </form>
);

export default EnteringMessages;
