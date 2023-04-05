import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import '../navbar.css';

const Navbar = () => {
  const location = useLocation();
  // const history = useHistory();

  const [menuOpen, setMenuOpen] = useState(false);
  // const [logout, setLogout] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Clear user session here
    localStorage.clear();
    // window.location.href = '/login';
  };

  const handleProfile = () => {
    // window.location.href = '/profile';
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">LiveLand</Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
        <Link to="/feed" className={location.pathname === '/feed' ? 'active' : ''}>Feed</Link>
        <Link to="/need" className={location.pathname === '/need' ? 'active' : ''}>Need</Link>
        <Link to ="/post" className={location.pathname === '/post' ? 'active' : ''}>Post</Link>
      </div>
      <div className="navbar-profile">
        <div className="profile-circle" onClick={handleMenuOpen}>
          <FaUserCircle />
        </div>
        <div className={`profile-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/profile"><button onClick={handleProfile} className='profile-button'>Profile</button></Link></li>
            <li><Link to="/login"><button onClick={handleLogout} className='profile-button'>Logout</button></Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-menu-icon" onClick={handleMenuOpen}>
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
