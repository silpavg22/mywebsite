import React, { Component } from 'react';
//import './resources/styles.css';
import './resources/main.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Intro from './components/intro';
import Projects from './components/projects';
import WorkExp from './components/workexperience';
import Education from './components/education';
import Achievements from './components/achievements';


import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
<div className="App">
    <Header/>
    <Element name="intro">
        <Intro/>
    </Element>
    <Element name="education">
        <Education/>
        </Element>
    <Element name="projects">
        <Projects/>
    </Element>    
    <Element name="workexperience">
        <WorkExp/>
        </Element>
    <Element name="achievements">
    <Achievements/>
    </Element>
     <Element name="contact">
        <Footer/>
    </Element>
</div>
    );
  }
}

export default App;
