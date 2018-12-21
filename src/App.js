import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>You have 30,000 days to fulfill your life. That may sound like a lot, but let's be objective.</h1>
        <div className="container">
          <ProgressBar birthDateObject={new Date('January 01, 2000 00:00:00')}/>
        </div>
        <h1>So make the most of it!</h1>
      </div>
    );
  }
}

export default App;
