import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isNavLinkActive = (path) => {
        return location.pathname === path;
    };

    const navlinks = (
        <>
            <li>
                <Link
                    to="/"
                    className={isNavLinkActive('/') ? 'text-cyan-400' : 'text-white'}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className={isNavLinkActive('/about') ? 'text-cyan-400' : 'text-white'}
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    to="/education"
                    className={isNavLinkActive('/education') ? 'text-cyan-400' : 'text-white'}
                >
                    Education
                </Link>
            </li>
            <li>
                <Link
                    to="/projects"
                    className={isNavLinkActive('/projects') ? 'text-cyan-400' : 'text-white'}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/skills"
                    className={isNavLinkActive('/skills') ? 'text-cyan-400' : 'text-white'}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className={isNavLinkActive('/contact') ? 'text-cyan-400' : 'text-white'}
                >
                    Contact Me
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar py-8 bg-blue-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end  pr-4">
                <a className="btn text-white border-0 bg-cyan-800">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
