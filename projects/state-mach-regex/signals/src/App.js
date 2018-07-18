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
    ctx.arc(140, 25, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Left Circle
    ctx.beginPath();
    ctx.arc(60, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Both Circle
    ctx.beginPath();
    ctx.arc(140, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    // Right Circle
    ctx.beginPath();
    ctx.arc(230, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }

  circleText(ctx) {
    ctx.fillStyle = "black";
    ctx.font="10px ariel";

    // Off Text
    ctx.fillText("Off", 132, 29);

    // Left Text
    ctx.fillText("Left", 51, 114);

    // Both Text
    ctx.fillText("Both", 130, 114);

    // Right Text
    ctx.fillText("Right", 219, 114);
    
  }

  drawLines(ctx) {
    // Off-To-Left
    ctx.beginPath();
    ctx.moveTo(130, 29);
    ctx.lineTo(50, 114);
    ctx.stroke();

    // Off-To-Both
    ctx.beginPath();
    ctx.moveTo(135, 29);
    ctx.lineTo(135, 114);
    ctx.stroke();
    
    // Off-To-Right
    ctx.beginPath();
    ctx.moveTo(150, 29);
    ctx.lineTo(240, 114);
    ctx.stroke();

    // Left-To-Off
    ctx.beginPath();
    ctx.moveTo(50, 114);
    ctx.lineTo(55, 29);
    ctx.lineTo(130, 29);
    ctx.stroke();
    
    // Left-To-Both
    ctx.beginPath();
    ctx.moveTo(50, 114);
    ctx.lineTo(140, 114);
    ctx.stroke();

    // Left-To-Right
    ctx.beginPath();
    ctx.moveTo(60, 114);
    ctx.lineTo(60, 130);
    ctx.lineTo(230, 130);
    ctx.lineTo(230, 100);
    ctx.stroke();

    // Both-To-Off
    ctx.beginPath();
    ctx.moveTo(145, 114);
    ctx.lineTo(145, 29);
    ctx.stroke();

    // Both-To-Left
    ctx.beginPath();
    ctx.moveTo(145, 105);
    ctx.lineTo(50, 105);
    ctx.stroke();
    
    // Both-To-Right
    ctx.beginPath();
    ctx.moveTo(145, 105);
    ctx.lineTo(240, 105);
    ctx.stroke();
    
    // Right-To-Off
    ctx.beginPath();
    ctx.moveTo(240, 105);
    ctx.lineTo(240, 29);
    ctx.lineTo(130, 29);
    ctx.stroke();
    
    // Right-To-Left
    ctx.beginPath();
    ctx.moveTo(235, 105);
    ctx.lineTo(235, 140);
    ctx.lineTo(54, 140);
    ctx.lineTo(54, 105);
    ctx.stroke();

    // Right-To-Both
    ctx.beginPath();
    ctx.moveTo(235, 114);
    ctx.lineTo(140, 114);
    ctx.stroke();
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
