import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe.js';
import ALI from './ALI.js';
import GrowBeasts from './GrowBeasts.js';
import Mathematizing from './Mathematizing.js';
import Resources from './Resources.js';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          {/* <Route path='/aboutme' component={AboutMe} /> */}
          <Route path='/ali' component={ALI} />
          <Route path='/growbeasts' component={GrowBeasts} />
          <Route path='/mathematizing' component={Mathematizing} />
          <Route path='/resources' component={Resources} />
          <Route exact path='/' component={AboutMe}/>
        </Switch>
      </div>
    );
  }
}

export default App;
