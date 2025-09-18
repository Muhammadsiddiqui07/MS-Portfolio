import { Steps } from "antd";
import inventry from '../Assests/inventry.jpg'
import elearning from '../Assests/elearning.jpg'
import attendence from '../Assests/ecommerce.jpeg'
import ecommerce from '../Assests/attendence.png'

const projects = [
    {

        title: "Inventory Management System",
        description:
            "A complete inventory management solution built with React, Node.js, Express, and MongoDB. Features include stock tracking, product categorization, supplier management, and sales reports with secure authentication.",
        image: inventry,

    },
    {

        title: "E-Learning Platform",
        description:
            "An interactive e-learning platform built with React and Firebase. Features include course management, real-time content updates, user authentication, and progress tracking for students.",
        image: elearning,

    },
    {
        title: "Attendance Application",
        description:
            "A web-based attendance management system where teachers can mark and track student attendance. Built using React, Node.js, Express, and MongoDB with secure authentication.",
        image: attendence,
    },
    {
        title: "E-Commerce Dashboard",
        description:
            "An admin dashboard for managing products, orders, and users in an e-commerce platform. Built with React, Ant Design, Node.js, and MongoDB for analytics and CRUD operations.",
        image: ecommerce,
    },
];

export default function Frontend() {
    return (
        <div className="text-white">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                My Projects
            </h1>

            <div className="max-w-6xl mx-auto">
                <Steps
                    direction="vertical"
                    current={-1}
                    items={projects.map((project, index) => ({
                        title: (
                            <div className="grid lg:grid-cols-2 gap-10 items-center py-8">
                                {/* Left content */}
                                <div
                                    className={`space-y-4 ${index % 1 === 0 ? "order-1" : "order-2 lg:order-1"
                                        }`}
                                >
                                    <h2 className="text-2xl font-semibold text-cyan-400">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Right image */}
                                <div
                                    className={`${index % 2 === 0 ? "order-2" : "order-1 lg:order-2"
                                        }`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ),
                    }))}
                />
            </div>
        </div>
    );
}
