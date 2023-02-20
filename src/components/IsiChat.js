import './ColChat.css';

import React from 'react';

const IsiChat = (props) => {

    return(
        <div className='isi-chat'>
            <h6>{props.data.name}</h6>
            <span>{props.data.body}</span>
        </div>
           
    )
}

export default IsiChat;