import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import $ from 'jquery'

import Skill from './components/Skill'

import josh from './img/joshhumpherys512.jpg'
import java from './img/java.svg'
import js from './img/js.png'
import cs from './img/cs.png'
import html5 from './img/html5.png'
import css3 from './img/css3.png'
import react from './img/react.svg'
import redux from './img/redux.png'
import nodejs from './img/nodejs.png'
import npm from './img/npm.svg'
import firebase from './img/firebase.svg'
import mysql from './img/mysql.svg'
import latex from './img/latex.svg'
import git from './img/git.png'
import gitHub from './img/github.png'
import wordpress from './img/wordpress.png'
import androidStudio from './img/android studio.png'
import intelliJ from './img/intellij.png'
import webStorm from './img/webstorm.svg'
import visualStudio from './img/visual studio.svg'
import eclipse from './img/eclipse.svg'
import android from './img/android.png'
import linux from './img/linux.svg'
import windows from './img/windows.png'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionsVisible: []
    };

    this.isVisible = this.isVisible.bind(this);
  }

  static navItemClick(id) {
    if($('.navbar-collapse.collapse.in').length > 0) {
      $('.navbar-toggle').click();
      setTimeout(() => App.scroll(id), 380);
    } else {
      App.scroll(id);
    }
  }

  static scroll(id) {
    const scrollTop = $('#' + id).offset().top - 60;
    $('body, html').animate({ scrollTop });
  }

  isVisible(id) {
    return this.state.sectionsVisible.includes(id);
  }

  componentDidMount() {
    const sections = ['about', 'professional', 'personal', 'skills', 'hobbies'];
    const viewportBottom = $(window).scrollTop() + $(window).height();
    const handleScroll = () => {
      const sectionsVisible = [...this.state.sectionsVisible];
      sections.forEach(section => {
        const sectionHeight = $('#' + section).offset().top - $(document).scrollTop();
        if(sectionHeight < viewportBottom - 50 && !sectionsVisible.includes(section)) {
          sectionsVisible.push(section);
        }
      });
      this.setState({ sectionsVisible });
    };
    handleScroll();
    $(window).scroll(handleScroll);
  }

  render() {
    return (
      <div id="home">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => App.navItemClick('home')}>Josh Humpherys</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={() => App.navItemClick('about')}>About</NavItem>
              <NavItem onClick={() => App.navItemClick('professional')}>Professional Projects</NavItem>
              <NavItem onClick={() => App.navItemClick('personal')}>Personal Projects</NavItem>
              <NavItem onClick={() => App.navItemClick('skills')}>Skills</NavItem>
              <NavItem onClick={() => App.navItemClick('hobbies')}>Hobbies</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="intro" className="intro">
          <div className="intro-child">
            <div className="intro-image-container">
              <img className="intro-image" src={josh} />
            </div>
            <div className="intro-text-container">
              <div className="intro-text">
                <div className="intro-name">Josh Humpherys</div>
                <div className="intro-position">Software Engineer</div>
                <div className="intro-location-and-email">
                  San Diego, CA <span className="pipe">| </span>
                  <a href="mailto:joshua.humpherys@gmail.com">joshua.humpherys@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main-container" className="main-container">
          <div className={'section animated animatedFadeInUp' + (this.isVisible('about') ? ' fadeInUp' : '')} id="about">
            <h2 className="section-heading">About</h2>
            <p>In May, I will graduate with a double major in Computer Science and Mathematics. I have a passion for solving problems and am looking for a full-time programming position that will allow me to think critically to solve hard problems and increase my technical expertise.</p>
            <p>I recently completed a software engineering internship at Illumina writing C# applications and libraries for their Next-Generation Sequencing (NGS) instruments. Before my most recent position at Illumina, I was a software development intern at Paragon Component Systems where I was a full-stack web developer.</p>
            <p>In 2015, I graduated from La Costa Canyon High School with a 4.58 GPA (4.00 unweighted) and passed 14 AP tests. After graduation I enrolled in a compilation of courses known as the Android Development Nanodegree, co-created by Google and Udacity, but I put the nanodegree on hold to be continued at a later date.</p>
            <p>My hobbies and regular activities include developing retro-style arcade games, web apps, and Android apps, reading about new technology, learning about best coding practices and design guidelines, playing Frisbee™ and volleyball, speedcubing, and running.</p>
            <p>I'm highly self-motivated and am always looking for new opportunities to gain experience and expand my realm of knowledge.</p>
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
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <div>LinkedIn</div>
              </div>
              <div className="social-icon">
                <a href="https://github.com/JoshHumpherys/Resume/raw/master/JoshuaHumpherys.pdf" target="blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 299.998 299.998">
                    <path d="M149.995,0.001C67.156,0.001,0,67.16,0,149.999s67.156,149.997,149.995,149.997s150.003-67.161,150.003-149.997    C299.997,67.157,232.834,0.001,149.995,0.001z M217.205,217.204c0,10.066-8.159,18.225-18.223,18.225h-97.967    c-10.068,0-18.225-8.159-18.225-18.225V82.79c0-10.066,8.159-18.225,18.225-18.225h76.892v36.45h39.298V217.204z M185.688,93.232    V64.563l31.517,28.669H185.688z" />
                  </svg>
                </a>
                <div>Resume</div>
              </div>
            </div>
          </div>
          <div className={'section animated animatedFadeInUp' + (this.isVisible('professional') ? ' fadeInUp' : '')} id="professional">
            <h2 className="section-heading">Professional Experience</h2>
            <div className="project">
              <div className="project-text">
                <h3 className="project-name">Illumina, Inc.</h3>
                <div className="project-date">
                  Summer 2017
                </div>
              </div>
              <p>I developed software for one of Illumina's upcoming Next-Generation Sequencing (NGS) instruments. Some of the projects I worked on included a front-end application for end users to do sequencing runs, a front-end application for manufacturers to test the instruments before shipment, and back-end libraries to control the instruments. All of our code was written in C#, and the views used either WPF or UWP.</p>
            </div>
            <div className="project">
              <div className="project-text">
                <h3 className="project-name">Paragon Component Systems, L.L.C.</h3>
                <div className="project-date">
                  Summer 2016
                </div>
              </div>
              <p>I developed software for structural engineers. The software provided functionality to model trusses in a 3D editor, along with other useful tools to increase efficiency in sharing engineering files and managing engineering jobs.</p>
              <p>My job primarily consisted of front-end web development including the use of Javascript with React and Redux. We used Node.js and various npm and bower packages, most notably Gulp, Stylus, Jade, JQuery, Lodash, Oboe, Babel, Postal, and Three.js. I also worked on the C#, Entity Framework server writing routes and updating the database schema.</p>
            </div>
          </div>
          <div className={'section animated animatedFadeInUp' + (this.isVisible('personal') ? ' fadeInUp' : '')} id="personal">
            <h2 className="section-heading">Personal Projects</h2>
            <div className="project">
              <div className="project-text">
                <h3 className="project-name">Cube Timer</h3>
                <div className="project-date">
                  January 2018
                </div>
              </div>
              <p>I'm creating a browser-based timer for speedcubers to record solve times and perform analysis. Speedcubers are people whose hobby is to solve a Rubik's cube as fast as possible, and to do so hundreds of times per session. This timer will record every solve time and display many different averages and distribution graphs. My goal is to create a timer with both outstanding functionality and an aesthetically-pleasing, intuitive user interface.</p>
              <h4 className="project-source">
                <a href="https://github.com/JoshHumpherys/cube-timer" target="blank">(source)</a>
              </h4>
            </div>
            <div className="project">
              <div className="project-text">
                <h3 className="project-name">AutomaDraw</h3>
                <div className="project-date">
                  Fall 2017
                </div>
              </div>
              <p>I developed this program as a capstone project for my B.A. Computer Science degree at Covenant College. It is a web application that allows users to create and analyze various automata and formal grammars found in computational theory. Included in this application are finite state machines, pushdown automata, Turing machines, regular expressions, and the four grammars in the Chomsky hierarchy, namely regular, context-free, context-sensitive, and unrestricted grammars. Users are able to run different input strings through the machines and grammars they create to see how they respond.</p>
              <h4 className="project-source">
                <a href="https://github.com/JoshHumpherys/AutomaDraw" target="blank">(source)</a>&nbsp;
                <a href="https://www.automadraw.com" target="blank">(full app)</a>
              </h4>
            </div>
          </div>
          <div className={'section animated animatedFadeInUp' + (this.isVisible('skills') ? ' fadeInUp' : '')} id="skills">
            <h2 className="section-heading">Skills</h2>
            <Skill name="Java" src={java} width="64" height="84" />
            <Skill name="C#" src={cs} width="72" height="80" />
            <Skill name="JavaScript" src={js} width="58" height="80" />
            <Skill name="HTML5" src={html5} width="80" height="80" />
            <Skill name="CSS3" src={css3} width="58" height="80" />
            <Skill name="React" src={react} width="64" height="64" />
            <Skill name="Redux" src={redux} width="64" height="58" />
            <Skill name="node.js" src={nodejs} width="128" height="78" />
            <Skill name="npm" src={npm} width="128" height="78" />
            <Skill name="Firebase" src={firebase} width="48" height="66" />
            <Skill name="MySQL" src={mysql} width="120" height="62" />
            <Skill name="LaTeX" src={latex} width="120" height="50" />
            <Skill name="git" src={git} width="120" height="50" />
            <Skill name="GitHub" src={gitHub} width="150" height="44" />
            <Skill name="Wordpress" src={wordpress} width="64" height="64" />
            <Skill name="Android Studio" src={androidStudio} width="64" height="64" />
            <Skill name="IntelliJ" src={intelliJ} width="64" height="64" />
            <Skill name="WebStorm" src={webStorm} width="64" height="64" />
            <Skill name="Visual Studio" src={visualStudio} width="64" height="64" />
            <Skill name="Eclipse" src={eclipse} width="64" height="70" />
            <Skill name="Android" src={android} width="64" height="77" />
            <Skill name="Linux" src={linux} width="64" height="78" />
            <Skill name="Windows" src={windows} width="64" height="64" />
          </div>
          <div className={'section animated animatedFadeInUp' + (this.isVisible('hobbies') ? ' fadeInUp' : '')} id="hobbies">
            <h2 className="section-heading">Hobbies</h2>
            <p>I enjoy developing retro-style arcade games, web apps, and Android apps, reading about new technology, learning about best coding practices and design guidelines, playing Frisbee&#8482; and volleyball, speedcubing, and running. For those who don't know, speedcubing is where you solve a Rubik's cube as fast as you can. As with most speedcubers, I generally do a few hundred solves per session once or twice a week, with shorter sessions in between. My personal record is 7.42 seconds, and I can even solve the cube blindfolded. I also run every day for fun, but I no longer run competitively. Regarding programming, I'm always working on something whether it be for school, work, or fun, and yet there are still so many things I want to develop!</p>
          </div>
        </div>
        <div id="footer" className="footer">
          <div className="footer-text-container">
            <div className="footer-text">
              <div className="footer-contact">Let's talk!</div>
              <div className="footer-location-and-email">
                Email me: <a href="mailto:joshua.humpherys@gmail.com">joshua.humpherys@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;