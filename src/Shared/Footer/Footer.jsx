import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                {/* Placeholder for relevant and professional text */}
                <p className='text-base'>Address: Dhaka, bangladesh</p>
                <p className='text-base'>Email: eanurlihan10@gmail.com</p>
                <p className='text-base'>Blood Group: B+</p>
                <p className='text-base'>`Passionate about creating innovative solutions and delivering high-quality projects.`</p>

            </aside>
            <nav>
                <header className="footer-title text-base">Social</header>
                <div className="grid grid-flow-col text-xl gap-4">
                    {/* Use React Icons for social links */}
                    <a href="https://github.com/Lihan37" target="_blank" rel="noopener noreferrer"><FaGithub className="fill-current text-white" /></a>
                    <a href="https://www.facebook.com/eanur.rahman.9" target="_blank" rel="noopener noreferrer"><FaFacebook className="fill-current text-white" /></a>
                    <a href="https://www.linkedin.com/in/eanurlihan/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="fill-current text-white" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
