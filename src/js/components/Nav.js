import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   return (
      <nav className="menu">
         <Link to="/" className="brand">
            <img src="/src/images/ouaretsamy-cropped.png" className="brand-img" />
            Ouaret Samy
         </Link>
         <div className="links">
            <Link to="/resume">Resume</Link>
            <Link to="/writings">Writings</Link>
            <Link to="/getintouch">Get in touch</Link>
         </div>
      </nav>
   );
}
export default Nav;
