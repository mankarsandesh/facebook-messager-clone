import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import { Button, InputLabel, FormControl, Input } from "@material-ui/core";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {

  const [input, setInput] = useState(''); // Input User Message
  const [messages, setMessage] = useState([{ username: 'sandesh', message: 'Heyyyy' }, { username: 'sachin', message: "Whatsup" }]); // MessagesS
  const [username, setUsername] = useState(''); // Username


  console.log(input);
  console.log(messages);

  // useState = variable in React
  // useEffect = run code on a condtion 

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessage(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])



  useEffect(() => {
    setUsername(prompt('Please Enter your name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessage([...messages, { username: username, message: input }]); // Set All Messages and username and input
    setInput(''); // Clear input box 
  }

  return (
    <div className="App">
      <h1>Messager Plus</h1>
      <h2>welcome {username} </h2>
      <form  className="app__form">
      <FormControl className="appform__control" >
        <InputLabel>Enter a Message</InputLabel>
        <Input  className="app__input" value={input} onChange={event => setInput(event.target.value)} />       
        <IconButton disabled={!input} className="app__iconButton" variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id,message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
