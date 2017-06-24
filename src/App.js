import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import {
  Login,
  Main,
  Create
} from './component'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCzWysMKJnF3DJqBeNhcPR7y0DpCFRlzBQ",
  authDomain: "pwa-crossword.firebaseapp.com",
  databaseURL: "https://pwa-crossword.firebaseio.com",
  projectId: "pwa-crossword",
  storageBucket: "pwa-crossword.appspot.com",
  messagingSenderId: "236312971136"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/main' component={Main} />
          <Route path='/create' component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;
