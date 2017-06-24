import React, { Component } from 'react'
import { Input, Card, Button  } from 'antd'
import firebase from 'firebase'
import { Redirect } from 'react-router-dom'

class Create extends Component {
  state = { 
  	text: '',
    redirect: false
  }

  writePost = (post_id, text, timestamp) => {
  	firebase.database().ref().child('post').push({
  		post_id: firebase.database().ref().child('post').push().key,
  		text: this.state.text,
  		timestamp: firebase.database.ServerValue.TIMESTAMP
  	})
  }
  	
  onclick = () => {
  	this.setState({ text: this.state.text })
  	this.writePost ()
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
    console.log(e.target.value)
  }

  logOut = async() => {
    await firebase.auth().signOut()
    this.setState({
      redirect: true
    })
  }

  componentDidMount() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          redirect: true
        })
      }
    })
  }
      
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className="container">
        <Card className="card">
          <h1>CREATE</h1>
          <Input type="textarea" value={this.state.text} onChange={this.handleChange} placeholder="Tell me your secret." />
          <button onClick={this.onclick}>click</button>
          <Button onClick={this.logOut}>logout</Button>
        </Card>
      </div>
    )
  }
}

export default Create