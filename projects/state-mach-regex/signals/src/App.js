import React, { Component } from 'react';

import './App.css';

class App extends Component {

  drawCanvas() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 300, 300);

    this.drawLines(ctx);
    this.drawCircles(ctx);
    this.circleText(ctx);
    this.lineText(ctx);
  }

  drawCircles(ctx) {
    // Off Circle 
    ctx.beginPath();
    ctx.arc(140, 25, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Left Circle
    ctx.beginPath();
    ctx.arc(60, 110, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Both Circle
    ctx.beginPath();
    ctx.arc(140, 110, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    // Right Circle
    ctx.beginPath();
    ctx.arc(230, 110, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }

  circleText(ctx) {
    ctx.fillStyle = "black";
    ctx.font="12px ariel";

    // Off Text
    ctx.fillText("Off", 130, 29);

    // Left Text
    ctx.fillText("Left", 50, 114);

    // Both Text
    ctx.fillText("Both", 129, 114);

    // Right Text
    ctx.fillText("Right", 216, 114);
    
  }

  drawLines(ctx) {
    // Off-To-Left
    ctx.beginPath();
    ctx.moveTo(130, 29);
    ctx.lineTo(50, 114);
    ctx.stroke();

    // Off-To-Both
    ctx.beginPath();
    ctx.moveTo(140, 29);
    ctx.lineTo(140, 114);
    ctx.stroke();
    
    // Off-To-Right
    ctx.beginPath();
    ctx.moveTo(150, 29);
    ctx.lineTo(240, 114);
    ctx.stroke();

    // Left-To-Off
    
    // Left-To-Both

    // Left-To-Right

    // Both-To-Off

    // Both-To-Left

    // Both-To-Right

    // Right-To-Off

    // Right-To-Left

    // Right-To-Both
  }

  lineText(ctx) {
    // Off-To-Left

    // Off-To-Both

    // Off-To-Right

    // Left-To-Off
    
    // Left-To-Both

    // Left-To-Right

    // Both-To-Off

    // Both-To-Left

    // Both-To-Right

    // Right-To-Off

    // Right-To-Left

    // Right-To-Both
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
