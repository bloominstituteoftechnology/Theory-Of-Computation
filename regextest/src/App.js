import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      //let regex = /[^()-\s\]]/g;
      // let val = '(555) 123-4567';
      //let re = /[()]/g;
      //replaces all the symbols for nothing
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
