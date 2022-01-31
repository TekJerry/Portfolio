import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to= "/">Home</Link>
      <Link to= "/projects">Projects</Link>
      <Link to= "/about">About Me</Link>
      <Link to= "/contact">Contact Me</Link>
    </div>
  )
}