import { Steps } from "antd";
import login from '../Assests/backend1.jpg'
import grocery from '../Assests/backend3.jpg'
import backendInventry from '../Assests/backend1.jpg'
import googleAuth from '../Assests/backend3.jpg'

const Projects = [
    {
        title: "FreshMart — Grocery Store APIs",
        description:
            "RESTful backend APIs for the FreshMart grocery store: product management, category filtering, cart operations, order placement, and a fully secured Admin Dashboard. Built with Node.js, Express.js, and MongoDB with JWT authentication.",
        image: login,
    },
    {
        title: "Inventory Management System APIs",
        description:
            "Backend service with Role-Based Access Control (RBAC) for managing stock levels, suppliers, and product records. Includes automated low-stock alert endpoints and dynamic CRUD APIs. Developed with Node.js, Express.js, and MongoDB.",
        image: grocery,
    },
    {
        title: "Live Attendance System — Server",
        description:
            "Multi-threaded TCP server in C# that handles concurrent client connections via raw socket communication, managing real-time student/employee attendance records with thread synchronization and session management.",
        image: backendInventry,
    },
    {
        title: "JWT Authentication System",
        description:
            "Secure user registration and login REST APIs built with Node.js, Express.js, and MongoDB. Features bcrypt password hashing, JWT token generation/refresh, and protected route middleware for full authentication flows.",
        image: googleAuth,
    },
];

export default function Backend() {
    return (
        <div className="text-white">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                My Projects
            </h1>

            <div className="max-w-6xl mx-auto">
                <Steps
                    direction="vertical"
                    current={-1}
                    items={Projects.map((project, index) => ({
                        title: (
                            <div className="grid lg:grid-cols-2 gap-10 items-center py-8">
                                {/* Left content */}
                                <div
                                    className={`space-y-4 ${index % 2 === 0 ? "order-1" : "order-2 lg:order-1"
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
