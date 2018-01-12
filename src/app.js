import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Image from './img/joshhumpherys.jpeg'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionsVisible: []
    };

    this.isVisible = this.isVisible.bind(this);
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
        if(sectionHeight < viewportBottom - 100 && !sectionsVisible.includes(section)) {
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
              <a onClick={() => App.scroll('home')}>Josh Humpherys</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onClick={() => App.scroll('about')}>About</NavItem>
              <NavItem onClick={() => App.scroll('professional')}>Professional Projects</NavItem>
              <NavItem onClick={() => App.scroll('personal')}>Personal Projects</NavItem>
              <NavItem onClick={() => App.scroll('skills')}>Skills</NavItem>
              <NavItem onClick={() => App.scroll('hobbies')}>Hobbies</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="intro" className="intro">
          <div className="intro-child">
            <div className="intro-image-container">
              <img className="intro-image" src={Image} />
            </div>
            <div className="intro-text-container">
              <div className="intro-text">
                <div className="intro-name">Josh Humpherys</div>
                <div className="intro-position">Software Engineer</div>
                <div className="intro-location-and-email">
                  San Diego, CA <a href="mailto:joshua.humpherys@gmail.com">joshua.humpherys@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main-container" className="main-container">
          <div className={'section animated animatedFadeInUp' + (this.isVisible('about') ? ' fadeInUp' : '')} id="about">
            <h2>About</h2>
              <p>In May I will graduate from Covenant College with Bachelors degrees in both Computer Science and Mathematics. I have a passion for solving problems and am looking for a full-time programming position that will allow me to think critically to solve hard problems and increase my technical expertise.</p>
              <p>I recently completed a software engineering internship at Illumina writing C# applications and libraries for their Next-Generation Sequencing (NGS) instruments. Before my most recent position at Ilumina, I was a software development intern at Paragon Component Systems, LLC, where I was a full-stack web developer.</p>
              <p>In 2015 I graduated from La Costa Canyon High School with a 4.58 GPA (4.00 unweighted) and passed 14 AP tests. After graduation I enrolled in a compilation of courses known as the Android Development Nanodegree, co-created by Google and Udacity, but I put the nanodegree on hold to be continued at a later date.</p>
              <p>My hobbies and regular activities include developing retro-style arcade games and Android apps, reading about new technology, learning about best coding practices and design guidelines, playing frisbee and volleyball, speedcubing, and running.</p>
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
            <h2>Professional Experience</h2>
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
            <h2>Personal Projects</h2>
            <div className="project">
              <div className="project-text">
                <h3 className="project-name">JoshHumpherys.com</h3>
                <div className="project-date">
                  January 2018
                </div>
              </div>
              <p>I programmed this website without a template using React and various other npm packages such as React-Bootstrap and jQuery. The project is hosted on Firebase.</p>
              <h4 className="project-source">
                <a href="https://github.com/JoshHumpherys/JoshHumpherys" target="blank">(source)</a>
              </h4>
            </div>
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
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo massa, suscipit vitae maximus nec, aliquam ut sapien. Sed eu tempor nulla. Donec mollis enim eu felis scelerisque pharetra. Cras non odio justo. Praesent dapibus, nunc aliquam egestas vulputate, diam nunc luctus libero, eget tempor dolor mauris at orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper, metus quis pulvinar suscipit, tortor metus interdum sapien, nec elementum leo nisl fermentum nibh. Vestibulum id neque vitae ex gravida sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Etiam eget ipsum tempor, tempus erat quis, malesuada felis.</p>
            <p>Mauris tempus elit posuere arcu bibendum, in accumsan nisl euismod. Aliquam pharetra placerat quam, in cursus enim auctor quis. Nulla eros ligula, suscipit sit amet sapien vel, volutpat volutpat sapien. Duis aliquam laoreet rutrum. Integer lacus arcu, lobortis a pharetra vel, accumsan in erat. Nunc elit leo, malesuada et malesuada nec, commodo at sem. Pellentesque vehicula, nisi quis rutrum egestas, felis justo sollicitudin mi, vitae molestie dolor turpis in nunc. Curabitur feugiat turpis at sem efficitur, vitae efficitur sapien blandit.</p>
            <p>Curabitur vehicula purus quis nisl auctor elementum. Quisque vitae commodo est. Nulla eleifend dapibus risus eu bibendum. Phasellus porttitor enim id tempor maximus. Vestibulum tempor velit justo, et convallis lacus imperdiet ut. Nulla egestas dictum dolor eu hendrerit. Ut in odio diam. Quisque in mauris luctus, vulputate enim eu, tempus diam. Quisque consectetur massa erat, ut iaculis erat blandit a. Etiam diam orci, consequat sit amet leo a, convallis semper nibh. Donec elementum, quam non accumsan sollicitudin, leo magna commodo sapien, nec pharetra justo nunc sed est. Fusce eu odio tempus, molestie turpis quis, mollis sapien. Sed ac nisl nec metus eleifend ornare et faucibus turpis.</p>
            <p>Integer sodales lobortis est, at vestibulum lectus pretium sit amet. Curabitur facilisis condimentum erat, a malesuada augue malesuada eu. Mauris orci diam, suscipit ullamcorper magna iaculis, interdum porttitor nisl. Sed fringilla tortor sit amet pellentesque gravida. Donec eleifend, felis sit amet suscipit congue, magna tellus molestie magna, lacinia volutpat nisl arcu quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique quam vitae lobortis. Etiam augue ipsum, porta vitae semper vitae, malesuada nec erat. Donec sit amet enim lorem. Vivamus luctus, dolor et egestas egestas, est sem maximus orci, quis tempor justo arcu ac ipsum. Vivamus sit amet tempus enim.</p>
            <p>Quisque non iaculis nibh. Mauris urna ante, porttitor ac pulvinar eu, aliquam sit amet nunc. Quisque ullamcorper, orci in cursus ultricies, erat leo tempus ipsum, eu fringilla arcu risus vel neque. Nunc vel ipsum et nunc porttitor vehicula. Cras sed pretium orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc varius purus molestie nibh convallis consectetur. Nulla semper enim sit amet dui dignissim, a hendrerit purus convallis. Curabitur dignissim tellus sit amet sem eleifend commodo.</p>
          </div>
          <div className={'section animated animatedFadeInUp' + (this.isVisible('hobbies') ? ' fadeInUp' : '')} id="hobbies">
            <h2>Hobbies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo massa, suscipit vitae maximus nec, aliquam ut sapien. Sed eu tempor nulla. Donec mollis enim eu felis scelerisque pharetra. Cras non odio justo. Praesent dapibus, nunc aliquam egestas vulputate, diam nunc luctus libero, eget tempor dolor mauris at orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin semper, metus quis pulvinar suscipit, tortor metus interdum sapien, nec elementum leo nisl fermentum nibh. Vestibulum id neque vitae ex gravida sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Etiam eget ipsum tempor, tempus erat quis, malesuada felis.</p>
            <p>Mauris tempus elit posuere arcu bibendum, in accumsan nisl euismod. Aliquam pharetra placerat quam, in cursus enim auctor quis. Nulla eros ligula, suscipit sit amet sapien vel, volutpat volutpat sapien. Duis aliquam laoreet rutrum. Integer lacus arcu, lobortis a pharetra vel, accumsan in erat. Nunc elit leo, malesuada et malesuada nec, commodo at sem. Pellentesque vehicula, nisi quis rutrum egestas, felis justo sollicitudin mi, vitae molestie dolor turpis in nunc. Curabitur feugiat turpis at sem efficitur, vitae efficitur sapien blandit.</p>
            <p>Curabitur vehicula purus quis nisl auctor elementum. Quisque vitae commodo est. Nulla eleifend dapibus risus eu bibendum. Phasellus porttitor enim id tempor maximus. Vestibulum tempor velit justo, et convallis lacus imperdiet ut. Nulla egestas dictum dolor eu hendrerit. Ut in odio diam. Quisque in mauris luctus, vulputate enim eu, tempus diam. Quisque consectetur massa erat, ut iaculis erat blandit a. Etiam diam orci, consequat sit amet leo a, convallis semper nibh. Donec elementum, quam non accumsan sollicitudin, leo magna commodo sapien, nec pharetra justo nunc sed est. Fusce eu odio tempus, molestie turpis quis, mollis sapien. Sed ac nisl nec metus eleifend ornare et faucibus turpis.</p>
            <p>Integer sodales lobortis est, at vestibulum lectus pretium sit amet. Curabitur facilisis condimentum erat, a malesuada augue malesuada eu. Mauris orci diam, suscipit ullamcorper magna iaculis, interdum porttitor nisl. Sed fringilla tortor sit amet pellentesque gravida. Donec eleifend, felis sit amet suscipit congue, magna tellus molestie magna, lacinia volutpat nisl arcu quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique quam vitae lobortis. Etiam augue ipsum, porta vitae semper vitae, malesuada nec erat. Donec sit amet enim lorem. Vivamus luctus, dolor et egestas egestas, est sem maximus orci, quis tempor justo arcu ac ipsum. Vivamus sit amet tempus enim.</p>
            <p>Quisque non iaculis nibh. Mauris urna ante, porttitor ac pulvinar eu, aliquam sit amet nunc. Quisque ullamcorper, orci in cursus ultricies, erat leo tempus ipsum, eu fringilla arcu risus vel neque. Nunc vel ipsum et nunc porttitor vehicula. Cras sed pretium orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc varius purus molestie nibh convallis consectetur. Nulla semper enim sit amet dui dignissim, a hendrerit purus convallis. Curabitur dignissim tellus sit amet sem eleifend commodo.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;