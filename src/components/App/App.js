import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Thanks from './Thanks/Thanks'
import Admin from './Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" component={Feeling}></Route>
        <Route exact path="/2" component={Understanding}></Route>
        <Route exact path="/3" component={Support}></Route>
        <Route exact path="/4" component={Comments}></Route>
        <Route exact path="/5" component={Thanks}></Route>
        <Route exact path="/Admin" component={Admin}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
