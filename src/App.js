import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { Segment } from "semantic-ui-react";
function App() {

  const [navigationItems] = useState([
    {
      name: 'aboutme',
      title: 'About Me'
    },
    {
      name: 'portfolio',
      title: 'Portfolio'
    },
    {
      name: 'contact',
      title: 'Contact'
    },
    {
      name: 'resume',
      title: 'Resume'
    }
  ])

  const [currentNavItem, setCurrentNavItem] = useState(navigationItems[0]);



  return (
    <div className="App">
      <div className="header">
        <header title='Sean Roshan'>
          <Nav navItems={navigationItems} setCurrentNavItem={setCurrentNavItem} currentNavItem={currentNavItem}></Nav>
        </header>
      </div>
      <section>
        <Segment basic className="app-content-container">
          {currentNavItem.name === 'aboutme' && <About />}
          {currentNavItem.name === 'contact' && <ContactForm />}
          {currentNavItem.name === 'portfolio' && <Portfolio/>}
          {currentNavItem.name === 'resume' && <Resume/>}
        </Segment>
      </section>
      <div className="app-footer-container"><Footer /></div>
    </div>
  );
}

export default App;
