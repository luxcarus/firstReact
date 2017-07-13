import React from 'react';
import {connect} from 'react-redux'
import {setStarList,getStarList} from '../../store/actions'

export default class ListButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onSetStarList}>SetStarList</button>
        <button type="button" onClick={this.props.onGetStarList}>GetStarList</button>
      </div>
    );
  }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetStarList: () => dispatch(setStarList())
    }
}
ListButton = connect(undefined, mapDispatchToProps)(ListButton);