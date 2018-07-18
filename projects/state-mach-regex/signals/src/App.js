import React, { Component } from 'react';

import './App.css';

class App extends Component {

  drawCanvas() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 700, 800);
  }

  render() {
    return (
      <div className="App">
        { this.drawCanvas() }
      </div>
    );
  }
}

export default App;
