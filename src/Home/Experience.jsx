import React from 'react';
import './experience/experience.css'; 
const Experience = () => {
  return (
    <div className="experience-container mt-40 text-center">
      <h2 className="text-4xl text-center text-cyan-400 font-bold mb-4">Experience</h2>

      <div className="max-w-3xl mx-auto">
        <div className="experience-item mb-8 animate-slide">
          <h3 className="text-3xl text-cyan-600 font-bold mb-2">Collaborative University Projects</h3>
          <p className="text-gray-500 text-sm mb-2">January 2019 - Present</p>
          <p className="mb-4 text-gray-300">
            Worked closely with university friends on several projects, contributing to a collaborative development environment.
            This experience allowed me to enhance my coding skills, understand project management, and strengthen teamwork.
          </p>
          <p className="mb-4 text-gray-300">
            During this period, I developed a solid foundation in software development and learned to effectively
            communicate and collaborate with team members.
          </p>
          <h4 className="text-xl text-cyan-600 font-bold mb-2">Key Contributions</h4>
          <ul className="list-disc text-gray-300 list-inside mb-4">
            <li>Successfully delivered projects within specified timelines.</li>
            <li>Collaborated with team members to identify and solve complex problems.</li>
            <li>Improved skills in version control, project organization, and collaborative coding.</li>
            {/* ... add more contributions ... */}
          </ul>
        </div>
        {/* Programming Hero */}
        <div className="experience-item mb-8 animate-slide">
          <h3 className="text-3xl text-cyan-600 font-bold mb-2">Programming Hero</h3>
          <p className="text-gray-500 text-sm mb-2">June 2023 - December 2023</p>
          <p className="mb-4 text-gray-300">
            I had the opportunity to enhance my coding skills and knowledge by being a part of Programming Hero, where I learned
            under the guidance of experienced instructors. During this period, I worked on various projects that helped me apply
            theoretical concepts into practical scenarios.
          </p>
          <p className="mb-4 text-gray-300">
            My journey with Programming Hero not only honed my technical skills but also improved my problem-solving abilities,
            teamwork, and time management.
          </p>
          <h4 className="text-xl text-cyan-600 font-bold mb-2">Key Achievements</h4>
          <ul className="list-disc text-gray-300 list-inside mb-4">
            <li>Successfully completed comprehensive courses on web development and programming.</li>
            <li>Collaborated with peers and mentors, fostering a collaborative learning environment.</li>
          </ul>
        </div>

        {/* Previous Work Experience (if any) */}
        {/* Add more experience sections as needed */}
      </div>
    </div>
  );
};

export default Experience;
