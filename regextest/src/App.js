import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// app created to test regex with feedback from console and test replace method
class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: ['555-123-4561',
        '5551234562',
        '(555) 123-4563',
        '555 123 4564]'],
      newNumber:''
    }
  }

  componentDidMount() {
    this.state.numbers.forEach((val => {
      // replaces all the symbols for nothing
      val = val.replace(/[-()\s\]]/g, '');
      console.log(val);
      this.setState({newNumber: val})
    }));
    
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.newNumber}</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
