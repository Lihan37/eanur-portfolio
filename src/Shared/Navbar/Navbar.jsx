import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = (
        <>
            <li><NavLink to="/" className="text-white">Home</NavLink></li>
            <li><NavLink to="/contact" className="text-white">Contact Me</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-blue-900 px-2 py-5">
            <div className="navbar-start">
                
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex"></div>
            <div className="navbar-end pr-4">
                <a className="btn bg-blue-600 text-white border-0">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
