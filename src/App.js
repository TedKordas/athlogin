import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form action="/" method="get"></form>
        <div>
          <label for="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text"></input>
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text"></input>
        </div>
        <div>
          <label for="coach">Coach</label>
          <input id="coach" name="coach" type="text"></input>
        </div>
        <div>
          <label for="sledType">Sled Type</label>
          <input id="sledType" name="sledType" type="text"></input>
        </div>
        <div>
          <label for="date">Date</label>
          <input id="date" name="date" type="date"></input>
        </div>
        <div>
          <label for="time">Time</label>
          <input id="time" name="time" type="time"></input>
        </div>
      </header>
    </div>
  );
}

export default App;
