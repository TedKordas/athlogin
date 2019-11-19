import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form id="form" action="/" method="GET"></form>
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" name="firstName" type="text" required></input>
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" name="lastName" type="text" required></input>
        </div>
        <div>
          <label for="coach">Coach:</label>
          <input id="coach" name="coach" type="text" required></input>
        </div>
        <div>
          <label for="sledType">Sled Type</label>
          <input id="sledType" name="sledType" type="text" required></input>
        </div>
        <div>
          <label for="date">Date:</label>
          <input id="date" name="date" type="date" required></input>
        </div>
        <div>
          <label for="time">Time:</label>
          <input id="time" name="time" type="time" required></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
