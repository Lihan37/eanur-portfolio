import React from 'react';
import { FaFacebook, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  const email = 'eanurlihan10@gmail.com';
  const phoneNumber = '+8801716285196';
  const facebookProfile = 'https://www.facebook.com/eanur.rahman.9';
  const linkedinProfile = 'https://www.linkedin.com/in/eanurlihan/';
  const githubProfile = 'https://github.com/Lihan37';

  return (
    <div className="contact-me-container mt-40 text-center">
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">Contact Me</h2>

      <div className="max-w-3xl mx-auto">
        <div className="contact-item mb-6">
          <h3 className="text-xl text-cyan-600 font-bold mb-2">Connect on Facebook</h3>
          <a href={facebookProfile} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook className="inline-block mr-2 text-2xl" />
            Facebook
          </a>
        </div>
        <div className="contact-item mb-6">
          <h3 className="text-xl text-cyan-600 font-bold mb-2">Send an Email</h3>
          <a href={`mailto:${email}`} className="text-white">
            <FaEnvelope className="inline-block mr-2 text-2xl" />
            Email
          </a>
          <p className='text-white mt-3'>eanurlihan10@gmail.com</p>
        </div>
        <div className="contact-item mb-6">
          <h3 className="text-xl text-cyan-600 font-bold mb-2">Call or Text</h3>
          <a href={`tel:${phoneNumber}`} className="text-white">
            <FaPhone className="inline-block mr-2 text-2xl" />
            Phone
          </a>
        </div>
        <div className="contact-item mb-6">
          <h3 className="text-xl text-cyan-600 font-bold mb-2">Connect on LinkedIn</h3>
          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin className="inline-block mr-2 text-2xl" />
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <h3 className="text-xl text-cyan-600 font-bold mb-2">Check out GitHub</h3>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub className="inline-block mr-2 text-2xl" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
