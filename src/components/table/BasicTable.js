import React from 'react'
// import {getStarList} from '../../store/actions'

export default class BasicTable extends React.Component {

  render(){
    return(
      <div>
        <table className="pure-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Url</th>
              <th>Date</th>
            </tr>
          </thead>

          {this.props.store.getState().lister.list.map((item, index) => (
            <tbody key={item.no}>
              <tr>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>{item.url}</td>
                <td>{item.date}</td>
              </tr>
            </tbody>
          ))}

        </table>      
      </div>
    )
  }

};