import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/home/Home.js'
import Navbar from './Components/Navbar/Navbar.js'


function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  );
}

export default App;
