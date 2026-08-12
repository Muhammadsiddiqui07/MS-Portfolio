import { Steps } from "antd";
import inventry from '../Assests/inventry.jpg'
import attendence from '../Assests/ecommerce.jpeg'
import ecommerce from '../Assests/WhatsApp Image 2026-08-12 at 3.22.30 PM.jpeg'
import backend1 from '../Assests/backend1.jpg'
import trafficLight from '../Assests/Screenshot 2026-08-12 161159.png'

const projects = [
    {
        title: "🛒 FreshMart — Full-Stack Grocery Store",
        stack: "React.js · Tailwind CSS · Node.js · Express.js · MongoDB · JWT",
        description:
            "A complete full-stack grocery store application with user authentication, product filtering & search, real-time interactive shopping cart, order placement, and an Admin Dashboard for product CRUD operations & inventory tracking.",
        image: ecommerce,
    },
    {
        title: "📦 Inventory Management System",
        stack: "MongoDB · Express.js · React.js · Node.js · JWT",
        description:
            "A robust MERN stack inventory solution with Role-Based Access Control (RBAC), secure stock tracking, dynamic supplier management, and automated low-stock alerts. Includes secure JWT authentication.",
        image: inventry,
    },
    {
        title: "📡 Live Attendance System",
        stack: "C# · TCP Sockets · Multi-threading · Network Programming",
        description:
            "A real-time client-server console application that tracks student/employee attendance via raw TCP socket communication. Features concurrent thread synchronization for handling multiple simultaneous client connections.",
        image: attendence,
    },
    {
        title: "🚦 Traffic Light Controller Simulation",
        stack: "React.js · Tailwind CSS · Finite State Machines (DFA)",
        description:
            "A 4-way intersection traffic light controller simulation built on Deterministic Finite Automata (DFA) principles. Uses custom React state hooks to model state transitions accurately — inspired by Theory of Automata.",
        image: trafficLight,
    },
    {
        title: "🤖 KNN Classification Model",
        stack: "Python · Scikit-Learn · Pandas · NumPy · Matplotlib",
        description:
            "A machine learning classification model using K-Nearest Neighbors algorithm. Covers end-to-end ML pipeline: data preprocessing, train/test split, model training, accuracy evaluation, and confusion matrix visualization.",
        image: backend1,
    },
];

export default function Frontend() {
    return (
        <div className="text-white">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
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
                                    className={`space-y-3 ${index % 2 === 0 ? "order-1" : "order-2 lg:order-1"
                                        }`}
                                >
                                    <h2 className="text-xl lg:text-2xl font-bold text-cyan-400">
                                        {project.title}
                                    </h2>
                                    <p className="text-xs text-teal-400/80 font-medium tracking-wide">
                                        {project.stack}
                                    </p>
                                    <p className="text-gray-300 text-base leading-relaxed">
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
