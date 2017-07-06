import React, { Component } from 'react';
import BasicButton from './components/button/BasicButton';
// import BasicInput from './components/input/BasicInput';

class Greeting extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        hello :) {this.state.name}
        <div>
          {/*<BasicInput></BasicInput>*/}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div>
          <BasicButton></BasicButton>
        </div>
      </div>
    );
  }
}
export default Greeting;