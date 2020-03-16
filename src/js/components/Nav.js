import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   return (
      <nav className="flex justify-between">
         <Link to="/" className="flex">
            {/* <img src="/images/ouaretsamy-cropped.png" className="w-20 h-20 rounded-full" /> */}
            <h1 className="font-bold text-3xl text-gray-800 leading-10">Samy Ouaret</h1>
         </Link>
         <div className="flex">
            <Link className='text-gray-900 font-500 text-lg p-3 hover:text-blue-600' to="/resume">Resume</Link>
            <Link className='text-gray-900 font-500 text-lg p-3 hover:text-blue-600' to="/writings">Writings</Link>
            <Link className='text-gray-900 font-500 text-lg p-3 hover:text-blue-600' to="/getintouch">Get in touch</Link>
         </div>
      </nav>
   );
}
export default Nav;
