import React, { useState, useEffect } from 'react';
import './Navbar.css';
import SidebarComponent from './Sidebar';
import { useUserAuth } from './UserAuthContext';

const Navbar = () => {
  const { user } = useUserAuth(); // Access user details from context
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (user && user.displayName) {
      setUserName(user.displayName); // Use the displayName from the user object
    } else {
      // Fetch the username from localStorage if available
      const storedName = localStorage.getItem('userName');
      setUserName(storedName);
    }
  }, [user]);

  return (
    <nav className="navbar">
      <SidebarComponent />

      <div className="navbar-left">
        <a href="/" className="logo">
          ARMSCare
        </a>
      </div>

      {/* Uncomment if you want to add a center section later */}
      {/* <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div> */}

      <div className="navbar-right">
        <a href="/profile" className="cart-icon">
          <span className="cart-count">
            {userName ? userName : 'Guest'}
          </span>
        </a>
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



/*import React from 'react';
import './Navbar.css';
import './Sidebar';
import SidebarComponent from './Sidebar';
const Navbar = () => {
  
  return (
    
<nav className="navbar">
  <SidebarComponent/>
  
  <div className="navbar-left">
    <a href="/" className="logo">
      ARMSCare
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
  {/*<div className="navbar-right">
    <a href="/profile" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>

);
};

export default Navbar;*/