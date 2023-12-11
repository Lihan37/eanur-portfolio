import React from 'react';
import { useSpring, animated } from 'react-spring';

const AboutMe = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }, 
  });

  return (
    <div className="about-me-container mt-16 text-center items-center justify-center px-8 py-16">
      <div className="about-me-content max-w-3xl mx-auto text-center">
        <h2 className="text-4xl text-cyan-400 font-bold mb-4">About Me</h2>

        <section>
          <animated.h3 style={fadeIn} className="text-2xl text-cyan-600 font-bold mb-2">Passionate Senior Web Developer</animated.h3>
          <animated.p style={fadeIn} className="text-lg text-gray-300">
            Hi, I'm Eanur Rahman, a dedicated MERN stack developer and a student of Computer Science and Engineering at Daffodil International University. I'm on a mission to become a senior web developer, passionate about crafting innovative and scalable solutions.
          </animated.p>
        </section>

        <section className="mt-8">
          <animated.h3 style={fadeIn} className="text-2xl text-cyan-600 font-bold mb-2">Tech Stack Proficiency</animated.h3>
          <animated.p style={fadeIn} className="text-lg text-gray-300">
            With a strong foundation in web development, I specialize in JavaScript, React.js, Node.js, Express.js, and MongoDB.
          </animated.p>
        </section>

        <section className="mt-8">
          <animated.h3 style={fadeIn} className="text-2xl text-cyan-600 font-bold mb-2">Trying My Hand at Backend Development</animated.h3>
          <animated.p style={fadeIn} className="text-lg text-gray-300">
            With addition to coding, I'm dabbling with backend development with the goal of offering all-encompassing solutions. During the day, I'm a computer geek that likes to play video games to relax and get inspired by the vibrant gaming community.
          </animated.p>
        </section>

        <section className="mt-8">
          <animated.h3 style={fadeIn} className="text-2xl text-cyan-600 font-bold mb-2">Continuous Learning and Growth</animated.h3>
          <animated.p style={fadeIn} className="text-lg text-gray-300">
            Excited about the endless possibilities in software development, I am committed to continuous learning and growth. Let's connect and explore how I can contribute to your team's success.
          </animated.p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
