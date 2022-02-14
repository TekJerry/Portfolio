import React from 'react';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav'>
      <button className='links'><a href="">Home</a></button>
      <button className='links'><a href="#projecto">Projects</a></button>
      <button className='links'><a href="#abouto">About Me</a></button>
      <button className='links'><a href="#contacto">Contact Me</a></button>
    </div>
  )
}
