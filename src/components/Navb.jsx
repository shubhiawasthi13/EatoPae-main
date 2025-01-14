import React, { useState } from 'react';
import './Nav.css'; // Make sure to import your CSS file
import { Outlet,Link } from 'react-router-dom';

const Navb = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav className="navbar">
            <div className="logo"> <Link to='/'><img src='logo-eatopae@2x.png' id='logo' /> </Link></div>
            <div className={`menu ${isMenuOpen ? 'active' : ''}`} id="menu">
             <Link to='/Customer' className='nav-link'>For Customers</Link>
             <Link to='/Merchant' className='nav-link'>For Merchants</Link>
             <Link to='#' className='nav-button'>Contact Us</Link>
                {/* <button className="nav-button">Contact Us</button> */}
              
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
        </nav>
        <Outlet/>
        </>
    );
};

export default Navb;
