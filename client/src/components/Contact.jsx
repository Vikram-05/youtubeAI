import React from 'react';
import {
    FiMail,
    FiUsers,
    FiInfo,
    FiArrowRight,
    FiCheckCircle,
    FiMapPin,
    FiClock,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
    FiGithub,
    FiServer,
    FiCloud,
    FiSmartphone,
    FiHelpCircle,
    FiChevronDown
} from 'react-icons/fi';
import { RiBrain2Fill } from "react-icons/ri";
import { BiChart } from "react-icons/bi";
import { LuCodeXml } from "react-icons/lu";
import { FaPalette } from "react-icons/fa";
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
    return (
        <div className="bg-white text-slate-900 antialiased">

            <Navbar />

            <section className="pt-24 pb-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-6">
                        <FiMail className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">Get in Touch</h1>
                    <p className="text-md text-slate-600 max-w-2xl mx-auto leading-relaxed">Have questions about YouTube AI Tutor? We'd love to hear from you. Whether you need support, have feedback, or want to discuss a partnership, our team is here to help.</p>
                </div>
            </section>

            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Send us a message</h2>
                                <p className="text-base text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                                            <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                                            <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">Subject</label>
                                        <select id="subject" name="subject" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all">
                                            <option>Support</option>
                                            <option>Feedback</option>
                                            <option>Business Inquiry</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                                        <textarea id="message" name="message" rows="6" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                                    </div>

                                    <div>
                                        <button type="submit" className="w-full px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all">Send Message</button>
                                        <p className="text-xs text-slate-500 mt-4 flex items-center gap-2">
                                            <FiCheckCircle className="w-4 h-4 text-slate-900" />
                                            We typically respond within 24 hours.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-100 rounded-2xl p-8">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-6">Contact Information</h3>
                                <div className="space-y-5">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                                            <FiMail className="w-5 h-5 text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 mb-1">Email</p>
                                            <a href="mailto:support@youtubeaitutor.com" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">vikramdbs9097@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                                            <FiMapPin className="w-5 h-5 text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 mb-1">Location</p>
                                            <p className="text-sm text-slate-600">Medi agrahara , Bengaluru, Karnataka</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200">
                                            <FiClock className="w-5 h-5 text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 mb-1">Response Time</p>
                                            <p className="text-sm text-slate-600">Within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-8">
                                <h3 className="text-xl font-bold tracking-tight text-white mb-6">Follow Us</h3>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                                        <FiLinkedin className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                                        <FiTwitter className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                                        <FiYoutube className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                                        <FiGithub className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                        <FiInfo className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-base font-semibold text-slate-900 mb-2">Need immediate help?</p>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-3">Check out our documentation and FAQ section for quick answers to common questions.</p>
                                        <a href="#" className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-1">
                                            View Documentation
                                            <FiArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6">
                            <FiUsers className="w-4 h-4 text-slate-900" />
                            <span className="text-sm font-medium text-slate-900">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">Meet Our Development Team</h2>
                        <p className="text-md text-slate-600 max-w-2xl mx-auto">Talented developers who built and maintain YouTube AI Tutor.</p>
                    </div>

                    <div className="flex items-start justify-center flex-wrap gap-6">
                        <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300 hover:shadow-lg w-full md:w-[450px]">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-5">
                                    <img src={'./vikram.png'} alt="Developer" className="w-24 h-24 rounded-xl border-2 border-slate-200" />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                                        <LuCodeXml className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Vikram kumar</h3>
                                <p className="text-sm font-medium text-slate-600 mb-3">Lead Full-Stack Developer</p>
                                <p className="text-xs text-slate-500 mb-5 leading-relaxed">Specializes in React, Node.js, and AI integration.</p>
                                <div className="flex space-x-2">
                                    <a href="https://github.com/Vikram-05" target='_blank' className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiGithub className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                    <a href="vikramdbs9097@gmail.com" target='_blank' className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiLinkedin className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                    <a href="mailto:vikramdbs9097@gmail.com" target='_blank' className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiMail className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300 hover:shadow-lg w-full md:w-[450px]">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-5">
                                    <img src={'./vikas.png'} alt="Developer" className="w-24 h-24 rounded-xl border-2 border-slate-200" />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                                        <RiBrain2Fill className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Sarah Mitchell</h3>
                                <p className="text-sm font-medium text-slate-600 mb-3">AI/ML Engineer</p>
                                <p className="text-xs text-slate-500 mb-5 leading-relaxed">Expert in NLP, LLMs, and video processing. PhD in Machine Learning.</p>
                                <div className="flex space-x-2">
                                    <a href="https://github.com/vikkolos" target='_blank' className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiGithub className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiLinkedin className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                    <a href="mailto:vikas@gmail.com" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg border border-slate-200 hover:bg-slate-900 hover:border-slate-900 transition-all group">
                                        <FiMail className="w-4 h-4 text-slate-600 group-hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-slate-200 rounded-full mb-6">
                            <FiHelpCircle className="w-4 h-4 text-slate-900" />
                            <span className="text-sm font-medium text-slate-900">FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">Frequently Asked Questions</h2>
                        <p className="text-xl text-slate-600">Find answers to common questions about YouTube AI Tutor.</p>
                    </div>

                    <div className="space-y-4">
                        <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-all">
                            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                                <span className="text-base font-semibold text-slate-900">How does YouTube AI Tutor process my videos?</span>
                                <FiChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-5 pt-0">
                                <p className="text-sm text-slate-600 leading-relaxed px-5">When you submit a YouTube link, the AI Tutor:
                                    <br />
                                    <li>Extracts the video ID and checks the database.</li>
                                    <li>Gets the transcript from YouTube or generates one using speech-to-text..</li>
                                    <li>Summarizes the content with AI and stores it.</li>
                                    <li>Answers your questions using this summary and transcript.</li>
                                    </p>
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-all">
                            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                                <span className="text-base font-semibold text-slate-900">Is there a free plan available?</span>
                                <FiChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-5 pt-0">
                                <p className="text-sm text-slate-600 leading-relaxed">Yes! We offer a free plan that allows you to process up to 3 videos per month with full access to summaries and basic Q&A features. For unlimited videos and advanced features like custom quizzes and study notes, check out our premium plans.</p>
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-all">
                            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                                <span className="text-base font-semibold text-slate-900">Can I use it for non-educational videos?</span>
                                <FiChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-5 pt-0">
                                <p className="text-sm text-slate-600 leading-relaxed">Absolutely! YouTube AI Tutor works with any video content, whether it’s educational, entertainment, tutorials, or anything else. It analyzes the video and helps answer your questions regardless of the topic.</p>
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-all">
                            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                                <span className="text-base font-semibold text-slate-900">How accurate are the AI-generated summaries?</span>
                                <FiChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-5 pt-0">
                                <p className="text-sm text-slate-600 leading-relaxed">AI-generated summaries are generally reliable for most videos. However, the accuracy can vary depending on factors like audio clarity, speaker accents, and the complexity of the content. While AI aims to provide accurate summaries, occasional errors may occur. It's always a good idea to cross-reference important information when precision is crucial.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact;