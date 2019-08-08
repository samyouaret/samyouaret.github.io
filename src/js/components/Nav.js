import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
   return (
      <nav className="menu">
         <Link to="/about">About</Link>
         <Link to="/social">Social</Link>
         <Link to="/resume">Resume</Link>
         <Link to="/getintouch">Get in touch</Link>
      </nav>
   );
}
export default Nav;
