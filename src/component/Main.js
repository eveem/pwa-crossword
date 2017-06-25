import React, { Component } from 'react'
import firebase from 'firebase'
import { Card, Icon } from 'antd'
import _ from 'lodash'
import moment from 'moment'

class Main extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    firebase.database().ref().child('post').once('value', (snapshot) => {
      console.log(snapshot.val())
      this.setState({
        data: snapshot.val()
      });
    });
  }

  render() {
  	console.log(this.state.data.length)
    return (
      <div>
        <div className="top">
          <button className="ghost read">WRITE CONTENT</button>
          <button className="ghost logout" onClick={this.logOut}>Logout</button>
        </div>
        <div className="parent">
      	{
      		_.map(this.state.data, (row, i) => 
      			{
      				return <Row send={row} key={i} />
      			}
      		) 
      	}
        </div>
      </div>
    );
  }
}

const Row = ({ send }) => (
  <div className="child">
    <Card>
    	<div className="top-div">{ send.text }</div>
    	<div className="bot-div">
			<Icon className="icon" type="star-o" />
    		{ moment(send.timestamp).startOf().fromNow() }
    	</div>
    </Card>
  </div>
)

export default Main