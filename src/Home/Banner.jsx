import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dp from '../assets/dp (1).png';
import './styles.css'

const Banner = () => {
  return (
    <div className="banner min-h-screen flex sm:flex-row justify-evenly items-center bg-cyan-800 mt-0 px-8 text-white">
      <div className="left-content items-center">
        <div className="rounded-full overflow-hidden h-64 w-64 mr-4">
          <img src={dp} alt="Your Name" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-5xl font-semibold">Eanur Rahman</p>
          <p className="text-2xl">MERN Stack Developer</p>
        </div>
      </div>
      <div className="w-64 pb-16 hidden lg:block right-content">
        <p className="text-lg italic">
          "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
        </p>
      </div>
    </div>
  );
};

export default Banner;
