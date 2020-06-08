import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         collapsed: true
      };
      this.notCollapsedStyle = {
         height: "auto",
         overflow: 'auto'
      };
      this.collapsedStyle = {
         height: "0",
         overflow: 'hidden'
      }
   }

   toggleNav() {
      this.setState({
         collapsed: !this.state.collapsed
      });
   }

   render() {
      return (
         <nav className="nav" >
            <Link to="/">
               <h1 className="font-bold text-4xl hover:text-gray-800 text-blue-900">Samy Ouaret</h1>
            </Link>
            <div className="nav-toggler" onClick={this.toggleNav.bind(this)}>
               <span className='toggler-bar'></span>
               <span className='toggler-bar'></span>
               <span className='toggler-bar'></span>
            </div>
            <div style={this.state.collapsed ? this.collapsedStyle :
               this.notCollapsedStyle}
               className="mt-3 sm:mt-0 nav-links"
               data-collapsed={this.state.collapsed}>
               <Link className='nav-item' to="/resume">Resume</Link>
               <Link className='nav-item' to="/getintouch">Get in touch</Link>
               <a className='nav-item' href="/blog">Blog</a>
            </div>
         </nav>
      );
   }
}
export default Nav;
