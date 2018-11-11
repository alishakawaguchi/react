import React from 'react';
import PropTypes from 'prop-types';


const ChatWindow = props => {
 return (
   <div>
   <div className="name sender">{props.user.username}</div>

  <ul className="message-list">
  {props.messages.map((message, index) => (
    <li
    key={index}
  className={
    message.username === props.user.username ? 'message sender' : 'message recipient'
  }
  >
  <p>{`${message.username}: ${message.text}`}</p>
  </li>
  ))}
  </ul>
 </div>
 );
};

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default ChatWindow;