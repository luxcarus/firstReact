import React from 'react';
import PropTypes from 'prop-types';
 
export default class BasicBody extends React.Component {
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

// BasicBody.propTypes = {
    // title: PropTypes.string,
    // body: PropTypes.string.isRequired
// };