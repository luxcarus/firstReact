import React, { Component } from 'react';

export default class BasicInput extends Component {

	constructor(){
		super();
	}

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}