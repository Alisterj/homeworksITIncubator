import React from 'react'
import styleMessage from './Message.module.css';

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={styleMessage.message}>
            <img src={props.avatar} alt="img"/>
            <div className={styleMessage.messageContent}>
                <div className={styleMessage.nameAndTextMessage}>
                    <h3>{props.name}</h3>
                    <p>{props.message}</p>
                </div>
                <div className={styleMessage.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
