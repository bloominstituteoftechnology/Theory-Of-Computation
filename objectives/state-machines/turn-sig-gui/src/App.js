import React, { Component } from 'react';
import logo from './logo.svg';
import LightsOff from './components/lights-off.js';
import RightTurn from './components/right-turn.js';
import LeftTurn from './components/left-turn.js;
import Hazards from './components/hazards.js;'
import './App.css';

class App extends Component {
	state = {
		off: true,
		hazard_def: true,
		left_blink: false,
		right_blink: false,
		sw_cocked: false,
		sig_arm_default: true,
		sig_arm_u: false,
		sig_arm_d: false,
	};
  render() {
    return (
      <div className="App">
				{ this.state.hazard_def === true && this.state.sw_cocked === false ? <LightsOff /> : NULL };
      </div>
    );
  }
}

export default App;
