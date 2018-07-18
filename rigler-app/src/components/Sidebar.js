import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="buttonRow">
        <a className="btn btn-default"><Link to='/'>Home</Link></a>
        <a className="btn btn-default"><Link to='/aboutme'>About Me</Link></a>
        <a className="btn btn-default"><Link to='/ali'>ALI</Link></a>
        <a className="btn btn-default"><Link to='/growbeasts'>Grow Beasts</Link></a>
        <a className="btn btn-default"><Link to='/mathematizing'>Mathematizing</Link></a>
        <a className="btn btn-default"><Link to='/resources'>Resources</Link></a>
      </div>
    )
  }
}

export default Sidebar