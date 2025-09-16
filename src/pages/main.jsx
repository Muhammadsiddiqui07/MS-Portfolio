import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import mainBg from "../Assests/main-bg.jpeg";
import profile from '../Assests/profile.jpg'
import { motion } from "framer-motion";
import { Code, Briefcase, Award } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiFirebase,
  SiVuetify,
  SiAntdesign,
  SiExpress,
  SiPython,
  SiDotnet,
  SiGit,
} from "react-icons/si";




const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-12 h-12" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 w-12 h-12" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" /> },
    { name: "React", icon: <FaReact className="text-cyan-300 w-12 h-12" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400 w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 w-12 h-12" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-12 h-12" /> },
    { name: "Ant Design", icon: <SiAntdesign className="text-blue-400 w-12 h-12" /> },
    { name: "GitHub", icon: <FaGithub className="text-white w-12 h-12" /> },
    { name: "VS Code", icon: <SiVuetify className="text-blue-500 w-12 h-12" /> },
    { icon: <SiPython className="text-yellow-400" />, name: "Python" },
    { icon: <SiGit className="text-red-500" />, name: "Git" },
    { icon: <SiDotnet className="text-indigo-400" />, name: "ASP.NET MVC" },

  ];

  return (

    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black"
    >
      <Navbar />

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[100vh] px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
            >
              <div className="space-y-4">
                <h2 className="text-lg text-teal-300 font-medium uppercase tracking-widest">
                  Hi, I’m
                </h2>

                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Muhammad Siddiqui <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                    <Typewriter
                      words={[
                        "MERN Stack Developer",
                        "Backend Developer",
                        "Frontend Developer",
                        "Full-Stack Engineer ",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>

                <p className="text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed">
                  Passionate about building modern, scalable, and user-friendly
                  web applications. I specialize in{" "}
                  <span className="font-semibold text-teal-300">
                    React.js, Node.js, Express, and MongoDB
                  </span>
                  .
                </p>

                <p className="text-sm lg:text-base text-gray-400 max-w-lg leading-relaxed italic">
                  "Turning ideas into functional digital products with clean
                  code and modern design."
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex gap-4">
                <NavLink to="/checkout">
                  <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full text-base lg:text-lg font-semibold hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-teal-500/30">
                    Hire Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </NavLink>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400/40 text-gray-200 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Right Floating Image */}
            <div
              className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
            >
              <div className="relative">
                <div className="w-[100%] h-[22rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-2xl  shadow-2xl shadow-black/60">
                  <img
                    src={mainBg}
                    alt="Main"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400/20 via-teal-400/20 to-blue-400/20 blur-2xl scale-110 animate-pulse -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black py-20 px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Profile Image with Glow */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl shadow-cyan-500/20 group">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/30 via-blue-400/20 to-teal-400/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Hi, I’m <span className="text-cyan-400 font-semibold">Muhammad Siddiqui</span>,
              a passionate <span className="text-teal-400">MERN Stack Developer </span>
              with a strong interest in building modern, scalable, and visually appealing
              web applications. I love turning ideas into functional products with clean
              code and smooth user experiences.
            </p>

            <p className="text-gray-400 italic">
              "Code with creativity, design with purpose, and build with passion."
            </p>

            {/* Skills Highlight */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-cyan-500/20 hover:scale-105 transition">
                <h4 className="text-cyan-400 font-semibold">Frontend</h4>
                <p className="text-sm text-gray-300">React.js, Tailwind Css, Ant Design</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-cyan-500/20 hover:scale-105 transition">
                <h4 className="text-cyan-400 font-semibold">Backend</h4>
                <p className="text-sm text-gray-300">Node.js, Express.js, Python, C#</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-cyan-500/20 hover:scale-105 transition">
                <h4 className="text-cyan-400 font-semibold">Database</h4>
                <p className="text-sm text-gray-300">MongoDB, SQL, Firebase, mySql</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-cyan-500/20 hover:scale-105 transition">
                <h4 className="text-cyan-400 font-semibold">Tools</h4>
                <p className="text-sm text-gray-300">Git, Postman, VS Code, Google Coolab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative py-20 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all"
              >
                {skill.icon}
                <span className="mt-3 text-sm lg:text-base text-white/80">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section
        id="portfolio"
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-gray-100 py-20 px-6 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            My Portfolio
          </motion.h2>

          {/* Subsections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h3 className="text-2xl font-semibold">Projects</h3>
              </div>
              <ul className="space-y-3">
                <li className="hover:text-purple-400 transition">🚀 E-commerce Website</li>
                <li className="hover:text-purple-400 transition">💻 Portfolio Website</li>
                <li className="hover:text-purple-400 transition">📱 Mobile App with Flutter</li>
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <span className="p-2 bg-slate-800 rounded-lg">⚛️ React</span>
                <span className="p-2 bg-slate-800 rounded-lg">🌐 Node.js</span>
                <span className="p-2 bg-slate-800 rounded-lg">🍃 MongoDB</span>
                <span className="p-2 bg-slate-800 rounded-lg">🐍 Python</span>
                <span className="p-2 bg-slate-800 rounded-lg">🌀 Tailwind</span>
                <span className="p-2 bg-slate-800 rounded-lg">📱 Flutter</span>
              </div>
            </motion.div>

            {/* Achievements / Experience */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-indigo-400" size={28} />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="hover:text-indigo-400 transition">🌟 Intern @ Dev Company</li>
                <li className="hover:text-indigo-400 transition">🏆 Hackathon Winner</li>
                <li className="hover:text-indigo-400 transition">📚 Open Source Contributor</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>



      <section
        id="contact"
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black py-20 px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Feel free to reach out for collaborations, freelance projects, or just
            to say hello 👋
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 ">
          {/* Left Side - Info */}
          <div className="space-y-6 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-cyan-400">Let’s Talk</h3>
            <p className="text-gray-300 leading-relaxed mb-22">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-semibold text-cyan-300">Email:</span>{" "}
                <a
                  href="mailto:youremail@gmail.com"
                  className="hover:text-teal-300 transition"
                >
                  muhammadsiddiqui1410@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-cyan-300">Phone:</span>{" "}
                <a href="tel:+923000000000" className="hover:text-teal-300 transition">
                  +92 336 3293562
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-cyan-500/20 border border-cyan-500/20">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>



    </div>
  );
};

export default MainPage;
