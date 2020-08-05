import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  render() {
    return(
      <div>
          <Navigation/>
          <Header/>
          <hr/>
          <Skills/>
          <hr/>
          <Education/>
          <hr/>
          <Portfolio/>
          <hr/>
          <Contact/>
      </div>
    )
  }   
}

export default App