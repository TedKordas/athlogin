import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      coach: '',
      sledType: '',
      date: '',
      time: '',
      runs: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const {firstName, lastName, coach, sledType, date, time, runs } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <form id="form" onSubmit={this.submitHandler}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input id="firstName" name="firstName" type="text" value={firstName} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input id="lastName" name="lastName" type="text" value={lastName} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <label htmlFor="coach">Coach:</label>
              <input id="coach" name="coach" type="text" value={coach} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <select htmlFor="sledType">
                <option id="sledType" name="sledType" value="bobsleigh" onChange={this.changeHandler}>Bobsleigh</option>
                <option id="sledType" name="sledType" value="skeleton" onChange={this.changeHandler}>Skeleton</option>
              </select>
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input id="date" name="date" type="date" value={date} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <input id="time" name="time" type="time" value={time} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <label htmlFor="runs">Runs:</label>
              <input id="runs" name="runs" type="number" min="1" max="10" value={runs} onChange={this.changeHandler} required></input>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </header>
      </div>
    )
  }
}

export default App;
