import React from 'react';
import 'purecss';

// import BasicInput from '../components/input/BasicInput'
 
export default class SignIn extends React.Component {

  signIn(e){
    e.preventDefault();
    e.stopPropagation();
    
    var req;
    if (window.XMLHttpRequest) { // 모질라, 사파리등 그외 브라우저, ...
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 이상
        req = new window.ActiveXObject("Microsoft.XMLHTTP");
    }

    req.open('POST', 'http://localhost:12000/auth', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.onreadystatechange = function (aEvt) {
      if (req.readyState === 4) {
        if(req.status === 200)
          console.log('okay');
        else
          console.log('not okay');
      }
    };
    var params = "id=00700";
    req.send(params);


  }
  render(){
    return (
      <div>
        <form className="pure-form">
          <fieldset>
            <legend>A compact inline form</legend>

            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>

            <label htmlFor="remember">
                <input id="remember" type="checkbox"></input> Remember me
            </label>

            <button type="submit" className="pure-button pure-button-primary" onClick={this.signIn}>Sign in</button>
          </fieldset>
        </form>
      </div>
    );
  }
}