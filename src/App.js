import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form id="form" method="POST" action="/tower">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input id="firstName" name="firstName" type="text" required></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input id="lastName" name="lastName" type="text" required></input>
          </div>
          <div>
            <label htmlFor="coach">Coach:</label>
            <input id="coach" name="coach" type="text" required></input>
          </div>
          <div>
            <select>
              <option value="bobsleigh">Bobsleigh</option>
              <option value="skeleton">Skeleton</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input id="date" name="date" type="date" required></input>
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input id="time" name="time" type="time" required></input>
          </div>
          <div>
            <label htmlFor="runs">Runs:</label>
            <input id="runs" name="runs" type="number" min="1" max="10" required></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
