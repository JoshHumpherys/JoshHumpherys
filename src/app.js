import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Image from './img/joshhumpherys.jpeg'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => alert('TODO scroll to top')}>Josh Humpherys</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={() => alert('TODO scroll to about')}>About</NavItem>
              <NavItem onClick={() => alert('TODO scroll to professional projects')}>Professional Projects</NavItem>
              <NavItem onClick={() => alert('TODO scroll to personal projects')}>Personal Projects</NavItem>
              <NavItem onClick={() => alert('TODO scroll to skills')}>Skills</NavItem>
              <NavItem onClick={() => alert('TODO scroll to hobbies')}>Hobbies</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="intro">
          <div className="intro-child">
            <div className="intro-image-container">
              <img className="intro-image" src={Image} />
            </div>
            <div className="intro-text-container">
              <div className="intro-text">
                <div className="intro-name">Josh Humpherys</div>
                <div className="intro-position">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
        content
        <br />
      </div>
    );
  }
}

export default App;