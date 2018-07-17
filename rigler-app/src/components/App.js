import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Beep Boop" />
        <Sidebar className="App-sidebar">
          <p>bloop</p>
        </Sidebar>
        <p className="App-intro">
          I am Mary's Website
        </p>
        <Switch>
          <Route path='/aboutme' Component={AboutMe} />
        </Switch>
      </div>
    );
  }
}

export default App;
