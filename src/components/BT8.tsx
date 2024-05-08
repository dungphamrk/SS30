import React, { Component } from 'react';

interface BT8State {
  inputValue: string;
}

class BT8 extends Component<{}, BT8State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidUpdate(prevProps: {}, prevState: BT8State) {
    if (prevState.inputValue !== this.state.inputValue) {
      document.title = this.state.inputValue || "Tiêu đề mặc định";
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>BT8</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default BT8;
