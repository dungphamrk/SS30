import React, { Component } from 'react';
interface CompanyState{
    company: string;
}
class BT5 extends Component<{},CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        company: 'rikkei'
    };
  }
  changeCompant = () => {
    this.setState({ company: this.state.company==='rikkei'?'soft':'rikkei'  });
  };

  render() {
    const { company } = this.state;
    return (
      <div>
        <h1>BT5</h1>

        <p>Company: {company}</p>
        <button onClick={this.changeCompant}>Change state</button>
     
      </div>
    );
  }
}
export default BT5;
