import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../../../src/assets/Untitled-removebg-preview.jpg';
import { FaArrowDownShortWide } from "react-icons/fa6";

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
                    className={`nav-link ${isNavLinkActive('/') ? 'active' : ''}`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className={`nav-link ${isNavLinkActive('/about') ? 'active' : ''}`}
                >
                    About Me
                </Link>
            </li>
            <li>
                <Link
                    to="/education"
                    className={`nav-link ${isNavLinkActive('/education') ? 'active' : ''}`}
                >
                    Education
                </Link>
            </li>
            <li>
                <Link
                    to="/projects"
                    className={`nav-link ${isNavLinkActive('/projects') ? 'active' : ''}`}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/skills"
                    className={`nav-link ${isNavLinkActive('/skills') ? 'active' : ''}`}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="/experience"
                    className={`nav-link ${isNavLinkActive('/experience') ? 'active' : ''}`}
                >
                    Experience
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className={`nav-link ${isNavLinkActive('/contact') ? 'active' : ''}`}
                >
                    Contact Me
                </Link>
            </li>
        </>
    );
    
    

    return (
        <div className="navbar py-8 fixed z-10 bg-blue-950">
             <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <FaArrowDownShortWide className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className='w-16 h-16 lg:ml-10 rounded-lg' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>

            </div>
            <div className='navbar-end'>
                <a href="https://drive.google.com/file/d/1T4z3il-4jOHfZFiLMBxzbaR6xvzoIOQr/view?usp=sharing" download target="_blank" rel="noreferrer" className="btn lg:mr-5 text-white border-0 bg-cyan-800">
                    Download Resume
                </a>
            </div>

        </div>
    );
};

export default Navbar;
