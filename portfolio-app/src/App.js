import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/home/Home.js'
import Navbar from './Components/Navbar/Navbar.js'
import Projects from './Components/projects/Projects.js'
import AboutMe from './Components/aboutMe/AboutMe.js'
import Contact from './Components/Contact/Contact.js'


function App() {
  return (
    <div className="main">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
