import React, { Component } from 'react';
interface CompanyState{
    company: string;
}
class BT6 extends Component<{},CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        company: 'rikkei'
    };
  }
  changeCompant = () => {
    this.setState({ company: this.state.company==='rikkei'?'soft':'rikkei'  });
    console.log(this.state);
    
  };
  shouldComponentUpdate(nextProps: {}, nextState: CompanyState) {
    return false;
  }

  render() {
    const { company } = this.state;
    return (
      <div>
        <h1>BT6</h1>

        <p>Company: {company}</p>
        <button onClick={this.changeCompant}>Change state</button>
     
      </div>
    );
  }
}
export default BT6;
