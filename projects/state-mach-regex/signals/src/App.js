import React, { Component } from 'react';

import './App.css';

class App extends Component {

  drawCanvas() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, 300, 300);

    this.drawStateMachine(ctx);
  }

  drawStateMachine(ctx) {
    // Off Circle 
    ctx.beginPath();
    ctx.arc(40, 25, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Left Circle
    ctx.beginPath();
    ctx.arc(60, 85, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Both Circle
    ctx.beginPath();
    ctx.arc(160, 85, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    // Right Circle
    ctx.beginPath();
    ctx.arc(200, 25, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
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
