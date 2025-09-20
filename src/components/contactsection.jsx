import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_5hod9qf", // 👉 tumhara Service ID
                "template_u1bvc4g", // 👉 tumhara Template ID
                formRef.current,
                "kw_L9UKSDc9ZQPISs" // 👉 tumhara Public Key
            )
            .then(
                (result) => {
                    console.log("✅ Message Sent:", result.text);
                    setSuccess(true);
                    setLoading(false);
                    formRef.current.reset();
                },
                (error) => {
                    console.error("❌ Error:", error.text);
                    setSuccess(false);
                    setLoading(false);
                }
            );
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    Get In <span className="text-cyan-400">Touch</span>
                </h2>
                <p className="text-gray-400 mt-2">
                    Feel free to reach out for collaborations, freelance projects, or just
                    to say hello 👋
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Left Side */}
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
                                href="mailto:muhammadsiddiqui1410@gmail.com"
                                className="hover:text-teal-300 transition"
                            >
                                muhammadsiddiqui1410@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-cyan-300">Phone:</span>{" "}
                            <a
                                href="tel:+923363293562"
                                className="hover:text-teal-300 transition"
                            >
                                +92 336 3293562
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-cyan-500/20 border border-cyan-500/20">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="from_name" // 👈 must match EmailJS template variable
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="from_email" // 👈 must match EmailJS template variable
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                name="message" // 👈 must match EmailJS template variable
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition transform hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    {/* Success / Error Message */}
                    {success === true && (
                        <p className="text-green-400 text-center mt-4">
                            ✅ Message sent successfully!
                        </p>
                    )}
                    {success === false && (
                        <p className="text-red-400 text-center mt-4">
                            ❌ Failed to send message. Try again!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
