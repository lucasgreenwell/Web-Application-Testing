import React from "react";
import "./App.css";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }


//lol
  handleBalls = () => {
    if (this.state.balls < 3) {
      this.setState({
        balls: this.state.balls + 1,
        strikes: this.state.strikes
      });
    }
    else {
      this.setState({
         balls: 0,
        strikes: 0
      })
    }
  };

  handleStrikes = () => {
    if( this.state.strikes < 2){
      this.setState({
        balls:this.state.balls,
        strikes: this.state.strikes + 1
      })
    } else {
      this.setState({
         balls: 0,
        strikes: 0
      })
    }
  };

  handleFouls = () => {
    if(this.state.strikes < 2){
      this.setState({
         balls: this.state.balls,
        strikes: this.state.strikes + 1
      })
    }
  };

  handleHits = () => {
    this.setState({
         balls: 0,
        strikes: 0
      })
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          handleBalls={this.handleBalls}
          handleFouls={this.handleFouls}
          handleHits={this.handleHits}
          handleStrikes={this.handleStrikes}
        />
      </div>
    );
  }
}

export default App;
