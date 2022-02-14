import React from 'react';
import Projects from '../projects/Projects.js'
import AboutMe from '../aboutMe/AboutMe.js'
import Contact from '../Contact/Contact.js'
import './Home.css'
import Navbar from '../Navbar/Navbar.js';
import Footer from '../footer/Footer.js';

export default function Home() {
  return (
    <div className='main-body'>
    <Navbar/>
    <div className='my-name-is'>
      <p className='my-name'>Hi there! My name is 
      <h2 title="JERRY GONZALEZ">JERRY GONZALEZ</h2></p>
    </div>
    <AboutMe/>
   <Projects/>
  <Contact/>
  <Footer/>
  </div>) 
}
