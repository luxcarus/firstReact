import React, { Component } from 'react';

class BasicInput extends Component {

	constructor(){
		super();
	}

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}
export default BasicInput;