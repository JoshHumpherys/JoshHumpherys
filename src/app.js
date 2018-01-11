import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Image from './img/joshhumpherys.jpeg'

class App extends Component {
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
        <div className="main-container">
          <div className="section" id="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo massa, suscipit vitae maximus nec, aliquam ut sapien. Sed eu tempor nulla. Donec mollis enim eu felis scelerisque pharetra. Cras non odio justo. Praesent dapibus, nunc aliquam egestas vulputate, diam nunc luctus libero, eget tempor dolor mauris at orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper, metus quis pulvinar suscipit, tortor metus interdum sapien, nec elementum leo nisl fermentum nibh. Vestibulum id neque vitae ex gravida sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Etiam eget ipsum tempor, tempus erat quis, malesuada felis.</p>
            <p>Mauris tempus elit posuere arcu bibendum, in accumsan nisl euismod. Aliquam pharetra placerat quam, in cursus enim auctor quis. Nulla eros ligula, suscipit sit amet sapien vel, volutpat volutpat sapien. Duis aliquam laoreet rutrum. Integer lacus arcu, lobortis a pharetra vel, accumsan in erat. Nunc elit leo, malesuada et malesuada nec, commodo at sem. Pellentesque vehicula, nisi quis rutrum egestas, felis justo sollicitudin mi, vitae molestie dolor turpis in nunc. Curabitur feugiat turpis at sem efficitur, vitae efficitur sapien blandit.</p>
            <div className="social-icons-container">
              <div className="social-icon">
                <a href="https://github.com/JoshHumpherys" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <div>GitHub</div>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/joshhumpherys" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <div>LinkedIn</div>
              </div>
              <div className="social-icon">
                <a href="https://github.com/JoshHumpherys/Resume/raw/master/JoshuaHumpherys.pdf" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/>
                  </svg>
                </a>
                <div>Resume</div>
              </div>
            </div>
          </div>
          <div className="section" id="professional">
            <h2>Professional Projects</h2>
            <p>Here is a paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>Hey look it's another paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section" id="personal">
            <h2>Personal Projects</h2>
            <p>Here is a paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>Hey look it's another paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section" id="Skills">
            <h2>Skills</h2>
            <p>Here is a paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>Hey look it's another paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="section" id="Hobbies">
            <h2>Hobbies</h2>
            <p>Here is a paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>Hey look it's another paragraph. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;