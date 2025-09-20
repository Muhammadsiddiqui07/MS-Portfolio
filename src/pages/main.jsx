import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";
import { Typewriter } from "react-simple-typewriter";
import mainBg from "../Assests/main-bg.jpeg";
import profile from '../Assests/profile.jpg'
import { motion } from "framer-motion";
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
import { Tabs } from 'antd';
import Frontend from "../components/frontend";
import Backend from '../components/Backend'
import WhatsappBtn from '../components/WhatsAppButton'
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactSection from '../components/contactsection'



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
    { icon: <SiPython className="text-yellow-400 w-12 h-12" />, name: "Python" },
    { icon: <SiGit className="text-red-500 w-12 h-12" />, name: "Git" },
    { icon: <SiDotnet className="text-indigo-400 w-12 h-12" />, name: "ASP.NET MVC" },

  ];

  const items = [
    {
      key: '1',
      label: 'Front End',
      children: <Frontend />,
    },
    {
      key: '2',
      label: 'Back End',
      children: <Backend />,
    },
  ];

  const [socialLinks] = useState([
    { icon: <FaFacebook />, url: "https://www.facebook.com/muhammad.siddiqui.7773" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/muhammadsiddiqui07" },
    { icon: <FaGithub />, url: "https://github.com/Muhammadsiddiqui07" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-siddiqui-b39a581b4" },
  ]);


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

              {/* Social Icons */}
              <div className="flex gap-5 pt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>


              {/* CTA Buttons */}
              <div className="pt-2 flex gap-4">
                <Link
                  to="contact" // 👈 id of your contact section
                  smooth={true}
                  duration={600}
                  offset={-80}
                >
                  <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full text-base lg:text-lg font-semibold hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-teal-500/30">
                    Hire Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                <a
                  href="/MS_MERN_CV.pdf" // yaha apna pdf file ka path do (e.g. /assets/resume.pdf ya public folder me resume.pdf)
                  download="Muhammad_Siddiqui_CV.pdf" // isse download hone par file ka naam set hoga
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cyan-400/40 text-gray-200 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Download CV
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
        <WhatsappBtn />
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
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white py-20 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-10">
            Portfolio
          </h2>

          {/* Tabs */}
          <div className="flex justify-center">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="custom-tabs w-full lg:w-3/4"
              centered
            />
          </div>
        </div>
      </section>





      <section
        id="contact"
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black py-20 px-6 lg:px-12"
      >
        <ContactSection />

      </section>




    </div >
  );
};

export default MainPage;
