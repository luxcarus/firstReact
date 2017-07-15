import React from 'react';

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
    
        /*
        let http = new Http({
            async:true,
            method:'POST',
            url: 'http://localhost:12000/star/list',
            whenSuccess:function(result){
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
        */


        that.props.store.dispatch(setStarList([
					{
						no: 1,
						name: 'Naver',
						url: 'http://dic.naver.com',
						date: '2017,02',
						func: function() {
							return alert('callback fr server1')
						}
					},
					{
						no: 2,
						name: 'Daum',
						url: 'http://daum.net',
						date: '2017,03',
						func: function() {
							return alert('callback fr server2')
						}
					},
				]));

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

