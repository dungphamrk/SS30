import React, { Component } from 'react';

interface Exercise01State {
  userName: string;
}

class Exercise01 extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'Dung ' 
    };
  }
  render() {
    const { userName } = this.state;
    return (
      <div>
        <h1>BT1</h1>
        <p>UserName: {userName}</p>
      </div>
    );
  }
}

export default Exercise01;
