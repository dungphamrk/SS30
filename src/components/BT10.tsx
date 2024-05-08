import React, { Component } from 'react';

interface BT10State {
  count: number;
}

class BT10 extends Component<{}, BT10State> {
  intervalID!: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.incrementCount(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count === 10 ? 0 : prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <h1>BT10: {this.state.count}</h1>
      </div>
    );
  }
}
export default BT10;
