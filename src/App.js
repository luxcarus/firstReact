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
import Header from './components/header/BasicHeader';
import Content from './components/body/BasicBody';

import RandomNumber from './components/test/RandomNumber';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: Math.round(Math.random()*100)
        };
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle } body={ this.props.contentBody }/>
                <RandomNumber number={this.state.value} 
                              onUpdate={this.updateValue} > </RandomNumber>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};
