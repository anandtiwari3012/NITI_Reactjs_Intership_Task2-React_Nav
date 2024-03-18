import React from 'react';
import './App.css'; 

const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
            <div className="brand">Anand Tiwari</div>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
              <div className="menu-toggle">&#9776;</div>
        </nav>
        <div className='body'>
          <h1>Hello Welcome To My Page</h1>
        </div>
        </div> 
    );
}

export default Navbar;
