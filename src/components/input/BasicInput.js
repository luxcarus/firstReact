import React from 'react';

export default class BasicInput extends React.Component {

	constructor(){
		super();
	}

  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    );
  }
}