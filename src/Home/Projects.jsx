import { FaUpload, FaChartBar, FaVoteYea, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <div className="projects-container mt-40 text-center">
            <h2 className="text-4xl text-cyan-400 font-bold mb-4">Projects</h2>

            <div className="max-w-3xl mx-auto">
                {/* LifeShare Blood Donation Platform */}
                <motion.div
                    className="project-item mb-8 p-6 border border-gray-300 rounded-md"
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="project-item mb-8 p-6 border border-gray-300 rounded-md">
                        <h3 className="text-2xl text-cyan-600 font-bold mb-2">LifeShare Blood Donation Platform</h3>
                        <p className="text-gray-300 mb-4">
                            Connects blood donors and recipients, facilitating blood donations and managing funding for medical expenses.
                        </p>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Features:</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <strong>User Registration:</strong> Allows users to register on the platform.
                            </li>
                            <li>
                                <strong>Blood Donation Requests:</strong> Enables users to create and view blood donation requests.
                            </li>
                            <li>
                                <strong>Donation History:</strong> Tracks the history of blood donations made by users.
                            </li>
                            <li>
                                <strong>Funding Section:</strong> Manages funding for medical expenses related to blood donations.
                            </li>
                            <li>
                                <strong>Responsive Design:</strong> Ensures a seamless experience across various devices.
                            </li>
                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Technologies Used:</h4>
                        <p className="text-gray-300 mb-4">
                            React.js, MongoDB, Tailwind CSS, Daisy UI, FireBase, Node.js, Express.js.
                        </p>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">GitHub Repositories:</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <a href="https://github.com/Lihan37/LifeShare-Client" target="_blank" rel="noopener noreferrer">
                                    Client-side
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Lihan37/LifeShare-Server" target="_blank" rel="noopener noreferrer">
                                    Server-side
                                </a>
                            </li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            <a href="https://life-share-70cc5.web.app/" target="_blank" rel="noopener noreferrer">
                                Live Demo: LifeShare Demo
                            </a>
                        </p>
                    </div>
                </motion.div>
                {/* Poll Management App */}
                <motion.div
                    className="project-item mb-8 p-6 border border-gray-300 rounded-md"
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="project-item mb-8 p-6 border border-gray-300 rounded-md">
                        <h3 className="text-2xl text-cyan-600 font-bold mb-2">Poll Management App</h3>
                        <p className="mb-4 text-gray-300">
                            Welcome to the Poll Management App, a platform designed for conducting image-based contests and managing user votes.
                            This application allows administrators to upload photos of contestants, view leaderboards, and provides users with the ability to vote for their favorite images.
                        </p>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Features</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <FaUpload className="inline-block mr-2 text-2xl" />
                                Admin Panel: Upload Contestant Photos
                            </li>
                            <li>
                                <FaChartBar className="inline-block mr-2 text-2xl" />
                                Admin Panel: Leaderboard
                            </li>
                            <li>
                                <FaVoteYea className="inline-block mr-2 text-2xl" />
                                User Interaction: Voting System
                            </li>
                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Tech Stack</h4>
                        <ul className="list-disc text-gray-300  list-inside mb-4">
                            <li>
                                <FaReact className="inline-block mr-2 text-2xl" />
                                React, Tailwind CSS, DaisyUI
                            </li>

                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Authentication</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                Firebase
                            </li>
                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Backend</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                MongoDB, Express.js
                            </li>
                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Getting Started</h4>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">GitHub Repositories:</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <a href="https://github.com/Lihan37/poll-management" target="_blank" rel="noopener noreferrer">
                                    Client-side
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Lihan37/poll-management-server" target="_blank" rel="noopener noreferrer">
                                    Server-side
                                </a>
                            </li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            <a href="https://poll-management.web.app/" target="_blank" rel="noopener noreferrer">
                                Live Demo: Poll Management Demo
                            </a>
                        </p>
                    </div>
                </motion.div>
                {/* Inn-Sight Room Booking System */}
                <motion.div
                    className="project-item mb-8 p-6 border border-gray-300 rounded-md"
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="project-item mb-8 p-6 border border-gray-300 rounded-md">
                        <h3 className="text-2xl text-cyan-600 font-bold mb-2">Inn-Sight Room Booking System</h3>
                        <p className="text-gray-300 mb-4">
                            A platform for booking and managing room reservations, including features for cancellation, date selection, user creation, and a review system.
                        </p>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Features:</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <strong>Room Booking:</strong> Allows users to book rooms for their stay.
                            </li>
                            <li>
                                <strong>Reservation Cancellation:</strong> Provides the ability to cancel room reservations.
                            </li>
                            <li>
                                <strong>Date Selection:</strong> Allows users to choose specific dates for their reservations.
                            </li>
                            <li>
                                <strong>User Registration:</strong> Enables users to create accounts for managing reservations.
                            </li>
                            <li>
                                <strong>Review System:</strong> Allows users to leave reviews for their stay.
                            </li>
                        </ul>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">Tech Stack:</h4>
                        <p className="text-gray-300 mb-4">
                            Frontend: React, Tailwind CSS, DaisyUI<br />
                            Backend: Firebase, MongoDB, Express.js
                        </p>
                        <h4 className="text-xl text-cyan-600 font-bold mb-2">GitHub Repositories:</h4>
                        <ul className="list-disc text-gray-300 list-inside mb-4">
                            <li>
                                <a href="https://github.com/Lihan37/innSight-client" target="_blank" rel="noopener noreferrer">
                                    Client-side
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Lihan37/innsight-server" target="_blank" rel="noopener noreferrer">
                                    Server-side
                                </a>
                            </li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            <a href="https://inn-sight.web.app/" target="_blank" rel="noopener noreferrer">
                                Live Demo: Inn-Sight Demo
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default Projects;
