import { Steps } from "antd";
import login from '../Assests/backend1.jpg'
import grocery from '../Assests/backend3.jpg'
import backendInventry from '../Assests/backend1.jpg'
import googleAuth from '../Assests/backend3.jpg'

const Projects = [
    {
        title: "Login & Signup APIs",
        description:
            "REST APIs for user registration and authentication built with Node.js, Express, and MongoDB. Includes JWT-based authentication and password encryption.",
        image: login,
    },
    {
        title: "Grocery Store APIs",
        description:
            "Backend APIs for managing grocery store operations including products, categories, cart, and orders. Built with Node.js, Express, and MongoDB.",
        image: grocery,
    },
    {
        title: "Inventory Management System",
        description:
            "A backend service for managing stock, suppliers, and product records with CRUD APIs. Developed using Node.js, Express, and MongoDB.",
        image: backendInventry,
    },
    {
        title: "Google Authentication",
        description:
            "OAuth 2.0 based authentication using Google sign-in, integrated with MongoDB to store user profiles.",
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
