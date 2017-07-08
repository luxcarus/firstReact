import React, { Component } from 'react';

export default class BasicButton extends Component {
  render() {
    console.log(this.props)
    return (
      <button onClick={this.props.onClick}>BasicButton</button>
    );
  }
}