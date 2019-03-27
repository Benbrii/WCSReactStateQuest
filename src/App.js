import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes.js';

class App extends Component {
  constructor(working) {
    super(working);
    this.state = {
      on: working.on
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  }

  render() {
    const working = this.state.on ? `Homer is working` : `Homer isn't working`
    const workingspeed = this.state.on ? `App-logo-speed` : `App-logo`
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className={workingspeed} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <div className="Homer">
            <button className={working} onClick={this.handleClick}>
              {working.toUpperCase()}
            </button>
          </div>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
