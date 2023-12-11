
import { Transition } from 'react-transition-group';
import { FaHtml5, FaCss3, FaReact, FaDatabase, FaFire, FaCode, FaLanguage, FaTools, FaUsers, FaCodeBranch, FaJava } from 'react-icons/fa';
 


const Skills = () => {

  
  return (
    <div className="skills-container mt-40 text-center">
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">Skills</h2>

      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h3 className="text-2xl text-cyan-600 font-bold mb-2">Frontend Development</h3>
          <ul className="list-disc text-white list-inside">
            <li className="text-lg mb-2"><FaHtml5 className="inline-block mr-2 text-2xl" />HTML5</li>
            <li className="text-lg mb-2"><FaCss3 className="inline-block mr-2 text-2xl" />CSS3</li>
            <li className="text-lg mb-2"><FaReact className="inline-block mr-2 text-2xl" />React</li>
            <li className="text-lg mb-2"><FaCode className="inline-block mr-2 text-2xl" />JavaScript</li>
            <li className="text-lg mb-2"><FaLanguage className="inline-block mr-2 text-2xl" />Next.js (Learning)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl text-cyan-600 font-bold mb-2">Backend Development</h3>
          <ul className="list-disc text-white list-inside">
            <li className="text-lg mb-2"><FaDatabase className="inline-block mr-2 text-2xl" />MongoDB</li>
            <li className="text-lg mb-2"><FaFire className="inline-block mr-2 text-2xl" />Firebase</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl text-cyan-600 font-bold mb-2">Other Skills</h3>
          <ul className="list-disc text-white list-inside">
            <li className="text-lg mb-2"><FaLanguage className="inline-block mr-2 text-2xl" />Communication Skills (English, Bengali)</li>
            <li className="text-lg mb-2"><FaTools className="inline-block mr-2 text-2xl" />Problem Solving</li>
            <li className="text-lg mb-2"><FaUsers className="inline-block mr-2 text-2xl" />Team Collaboration</li>
            <li className="text-lg mb-2"><FaCodeBranch className="inline-block mr-2 text-2xl" />Version Control (Git)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl text-cyan-600 font-bold mb-2">Programming Languages</h3>
          <ul className="list-disc text-white list-inside">
            <li className="text-lg mb-2"><FaCode className="inline-block mr-2 text-2xl" />C++</li>
            <li className="text-lg mb-2"><FaJava className="inline-block mr-2 text-2xl" />Java</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
