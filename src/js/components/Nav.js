import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   return (
      <nav className="nav">
         <Link to="/">
            <h1 className="font-bold text-4xl hover:text-gray-800 text-blue-900">Samy Ouaret</h1>
         </Link>
         <div className="mt-3 sm:mt-0">
            <Link className='nav-item' to="/resume">Resume</Link>
            <Link className='nav-item' to="/getintouch">Get in touch</Link>
            <a className='nav-item' href="/blog">Blog</a>
         </div>
      </nav>
   );
}
export default Nav;
