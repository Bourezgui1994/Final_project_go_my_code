import React, { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { FcOnlineSupport } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";



const ENDPOINT =
  window.location.host.indexOf('localhost') >= 0
    ? 'http://127.0.0.1:5000'
    : window.location.host;

const ChatBox = (props) => {
    const { userInfo } = props;
    const [socket, setSocket] = useState(null);
    const uiMessagesRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messageBody, setMessageBody] = useState('');
    const [messages, setMessages] = useState([
      { name: 'Admin', body: 'Hello there, Please ask your question.' },
    ]);
  
    useEffect(() => {
      if (uiMessagesRef.current) {
        uiMessagesRef.current.scrollBy({
          top: uiMessagesRef.current.clientHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
      if (socket) {
        socket.emit('onLogin', {
          _id: userInfo._id,
          name: userInfo.name,
          isAdmin: userInfo.isAdmin,
        });
        socket.on('message', (data) => {
          setMessages([...messages, { body: data.body, name: data.name }]);
        });
      }
    }, [messages, isOpen, socket]);
  
    const supportHandler = () => {
      setIsOpen(true);
      console.log(ENDPOINT);
      const sk = socketIOClient(ENDPOINT);
      setSocket(sk);
    };
    const submitHandler = (e) => {
      e.preventDefault();
      if (!messageBody.trim()) {
        alert('Error. Please type message.');
      } else {
        setMessages([...messages, { body: messageBody, name: userInfo.name }]);
        setMessageBody('');
        setTimeout(() => {
          socket.emit('onMessage', {
            body: messageBody,
            name: userInfo.name,
            isAdmin: userInfo.isAdmin,
            _id: userInfo._id,
          });
        }, 1000);
      }
    };
    const closeHandler = () => {
      setIsOpen(false);
    };
    return (
      <div className="chatbox">
        {!isOpen ? (
          <button type="button" onClick={supportHandler}>
            <FcOnlineSupport  size='5rem'/>
          </button>
        ) : (
          <div className="card card-body">
            <div >
              <strong > Service client </strong>
              
                <AiFillCloseCircle size='2rem' onClick={closeHandler} style={{marginLeft:'80px'}} />
             
            </div>
            <ul ref={uiMessagesRef}>
              {messages.map((msg, index) => (
                <li key={index}>
                  <strong>{`${msg.name}: `}</strong> {msg.body}
                </li>
              ))}
            </ul>
            <div>
              <form onSubmit={submitHandler} className="FormChat" >
                <input
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  type="text"
                  placeholder="type message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}

export default ChatBox