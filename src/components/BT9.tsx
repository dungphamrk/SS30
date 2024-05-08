import React, { Component } from 'react';

interface BT9State {
  time: string;
}
class BT9 extends Component<{}, BT9State> {
  intervalID: number;
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    this.intervalID = window.setInterval(() => this.tick(), 1000);
  }
  componentDidMount() {
    this.intervalID = window.setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div>
        <h1>Current Time:</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default BT9;
