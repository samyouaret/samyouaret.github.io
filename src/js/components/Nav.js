import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   return (
      <nav className="flex flex-col items-center sm:justify-between sm:flex-row">
         <Link to="/" className="flex">
            {/* <img src="/images/ouaretsamy-cropped.png" className="w-20 h-20 rounded-full" /> */}
            <h1 className="font-bold text-4xl hover:text-gray-800 text-blue-900">Samy Ouaret</h1>
         </Link>
         <div className="flex">
            <Link className='text-gray-900 font-semibold text-lg p-3 hover:text-blue-600' to="/resume">Resume</Link>
            <Link className='text-gray-900 font-semibold text-lg p-3 hover:text-blue-600' to="/getintouch">Get in touch</Link>
            <a className='text-gray-900 font-semibold text-lg p-3 hover:text-blue-600' href="/blog">Blog</a>
         </div>
      </nav>
   );
}
export default Nav;
