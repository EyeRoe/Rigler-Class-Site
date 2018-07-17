import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="App-sidebar">
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/aboutme'>About Me</Link></button>
        <button><Link to='/ali'>ALI</Link></button>
        <button><Link to='/growbeasts'>Grow Beasts</Link></button>
        <button><Link to='/mathematizing'>Mathematizing</Link></button>
        <button><Link to='/resources'>Resources</Link></button>
      </div>
    )
  }
}

export default Sidebar