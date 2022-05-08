import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const CONNECTION_PORT = 'localhost:4000/';
let socket;

const ChatRoomSocketIo = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList([...messageList, data]);
    });
  });

  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit('join_room', [room, userName]);
  };

  const sendMessage = () => {
    let messageContent = {
      room: room,
      content: {
        user: userName,
        message: message,
      },
    };
    socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage('');
  };
  
  return (
    <div>
      {!loggedIn ? (
        <div>
          <div>
            <TextField
              name="name"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              label="Name"
              variant="outlined"
              autoComplete="off"
            />
          </div>
          <br />
          <div>
            <TextField
              name="room"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
              label="Room"
              variant="outlined"
              autoComplete="off"
            />
          </div>
          <br />
          <Button variant="contained" color="primary" onClick={connectToRoom}>
            Enter Chat
          </Button>
        </div>
      ) : (
        <div>
          <h1>Chat Here</h1>
          <br />
          <div>
            <TextField
              name="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              label="Message"
              variant="outlined"
              autoComplete="off"
            />
          </div>
          <br />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send Message
          </Button>
          <div>
            <h2>Messages</h2>
            {messageList.map((value, key) => {
              return (
                <h3 key={key}>
                  {value.user}:{value.message}
                </h3>
              );
            })}
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ChatRoomSocketIo;
