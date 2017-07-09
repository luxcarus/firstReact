// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import Greeting from './Greeting';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>title</div>
//         <Greeting></Greeting>
//       </div>
//     );
//   }
// }



import React from 'react';
// import Header from './components/header/BasicHeader';
// import Content from './components/body/BasicBody';
// import RandomNumber from './components/test/RandomNumber';

// import SignIn from './containers/SignIn';

import BasicTable from './components/table/BasicTable'
import ListButton from './components/button/ListButton'

import Http from './utils/http'

import {setStarList} from './store/actions'

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: Math.round(Math.random()*100)
        };
        this.updateValue = this.updateValue.bind(this);
        this.id = 0
    }
    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    getStars (that) {

        let http = new Http({
            async:true,
            method:'POST',
            url: 'http://localhost:12000/star/list',
            whenSuccess:function(result){
                console.log(result.data[0]);
                that.props.store.dispatch(setStarList(result.data));

            },
            whenError:function(result){
                alert('no-err');
            }
        }).getHttp();

        let param=null;
        if(that.id === 0){
            param = 'id=0';
            that.id = 1
        }else if(that.id === 1){
            param = 'id=1'
            that.id = 0 
        }
        http.send(param);

    }

    setStarsOnTable (data) {
        console.log(data);
    }

    render(){
        return  (
            <div>
                {/*<Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle } body={ this.props.contentBody }/>
                <RandomNumber number={this.state.value} 
                              onUpdate={this.updateValue} > </RandomNumber>*/}

                
                {/*<SignIn></SignIn>*/}

                <BasicTable store = {this.props.store}></BasicTable>
                <ListButton onSetStarList={()=>this.getStars(this)} onGetStarList={this.setStars}></ListButton>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};
