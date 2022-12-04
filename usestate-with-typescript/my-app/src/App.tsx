import React, { ChangeEvent, useState } from 'react';
import './App.css';

// Type we need for our state
interface UserInputType {
  username: string;
  password: string
}

const initialState = { username: '', password: '' };

function App() {
  // typed useState
  const [userInput, setUserInput] = useState<UserInputType>(initialState)
  // Username input, password input -> useState

  // onChange of username -> set the username property equal to the input value
  function setUsername(e: ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, username: e.target.value });
  }

    function setPassword(e: ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, password: e.target.value });
  }
  

  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={(e) => setUsername(e)}></input>
      <h3>Password</h3>
      <input type="text" onChange={(e) => setPassword(e)}></input>
    </div>
  );
}

export default App;
