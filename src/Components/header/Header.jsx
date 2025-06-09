import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                    <h1 className="logo-text">Vivekanand College</h1>
                    <div className="nav-links">
                      <Link to="/home" className="nav-link">Home</Link>
                      <Link to="/about" className="nav-link">About</Link>
                      <Link to="/courses" className="nav-link">Courses</Link>
                      <Link to="/contact" className="nav-link">Contact</Link>
                      <Link to="/addmission"></Link>
                      <Link to="/addmision" id="apply-btn"><button className="btn"><span> Apply Now!</span></button></Link>
                    </div>
            </nav>
        </header>
    );
};

export default Header;