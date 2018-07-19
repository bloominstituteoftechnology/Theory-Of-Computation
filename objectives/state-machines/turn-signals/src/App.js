import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      left: false,
      right: false,
      hazard: false,
    }
  }

  leftSignal = () => {
    this.setState({
      left: true,
      right: false,
    })
  }

  rightSignal = () => {
    this.setState({
      left: false,
      right: true,
    });
  }

  hazards = () => {
    this.setState({
      left: true,
      right: true,
    });
  }

  off = () => {
    this.setState({
      left: false,
      right: false,
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Turn controls</h1>
        <div className="container">
          <div className={!this.state.left ? "lvisibility" : ''}>
            <div className="leftArrow">
              <img alt='' src={"http://rs1202.pbsrc.com/albums/bb380/blogbiztutor/Blogger/Button/animated-gifs-arrows-15.gif~c200"} />
            </div>
          </div>

          <div className={!this.state.right ? "rvisibility" : ''}>
            <div className="rightArrow">
              <img alt='' src={"http://rs1202.pbsrc.com/albums/bb380/blogbiztutor/Blogger/Button/animated-gifs-arrows-15.gif~c200"} />
            </div>
          </div>

        </div>

        <button onClick={this.leftSignal}>Left signal</button>
        <button onClick={this.off}>OFF</button>
        <button onClick={this.rightSignal}>Right signal</button>
        <br/>
        <button onClick={this.hazards}>Hazard lights</button>
      </div>
    );
  }
}

export default App;
