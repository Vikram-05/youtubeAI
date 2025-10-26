import React from 'react'
import Navbar from './Navbar'
import { HiOutlineSparkles } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { RiBrain2Fill } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";
import Footer from './Footer';

function About() {
    return (
        <div className="bg-white text-gray-900 font-sans antialiased">
          
            <Navbar />

          
            <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center mt-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 mb-6">
                    <HiOutlineSparkles className="w-4 h-4"/>
                    <span>About Our Service</span>
                </div>
                <h1 className="text-5xl font-semibold tracking-tight mb-6">Learning from videos,<br />reimagined with AI</h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">We transform any YouTube video into an interactive learning experience, making knowledge more accessible and easier to understand.</p>
            </section>

     
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">What we do</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">YouTube AI Tutor is an intelligent companion that transforms passive video watching into active learning and exploration. Our service analyzes any YouTube video—from university lectures to cooking tutorials, music videos, or travel vlogs—and helps you extract maximum value from the content.</p>
                        <p className="text-gray-600 leading-relaxed">Whether you're studying for exams, learning a new skill, exploring hobbies, or just curious about a topic, our AI understands the video content and becomes your personal tutor, ready to answer questions and clarify concepts instantly.</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-md border border-gray-200">
                                    <FaYoutube className="w-5 h-5 text-gray-700"/>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Any YouTube Video</h3>
                                    <p className="text-sm text-gray-600">Works with educational and non-educational content</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-md border border-gray-200">
                                    <LuMessageCircleMore className="w-5 h-5 text-gray-700"/>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Interactive Q&A</h3>
                                    <p className="text-sm text-gray-600">Ask questions and get instant, accurate answers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white rounded-md border border-gray-200">
                                    <FaRegFileLines className="w-5 h-5 text-gray-700"/>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Smart Summaries</h3>
                                    <p className="text-sm text-gray-600">Get concise overviews of key points and takeaways</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="bg-gray-50 border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">How it works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Simple, fast, and powerful—get started in three easy steps</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 border border-gray-200">
                            <div className="w-10 h-10 bg-gray-900 text-white rounded-md flex items-center justify-center font-semibold mb-6">1</div>
                            <h3 className="text-lg font-semibold mb-3">Paste YouTube URL</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Simply copy and paste any YouTube video link into our platform. Our AI begins analyzing the content immediately.</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 border border-gray-200">
                            <div className="w-10 h-10 bg-gray-900 text-white rounded-md flex items-center justify-center font-semibold mb-6">2</div>
                            <h3 className="text-lg font-semibold mb-3">AI Processes Content</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Our advanced AI extracts, transcribes, and understands the video content, building a comprehensive knowledge base.</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 border border-gray-200">
                            <div className="w-10 h-10 bg-gray-900 text-white rounded-md flex items-center justify-center font-semibold mb-6">3</div>
                            <h3 className="text-lg font-semibold mb-3">Learn Interactively</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Ask questions, get summaries, and explore concepts at your own pace with instant AI-powered responses.</p>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">Why users love us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Discover the advantages that make learning more efficient and enjoyable</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">

                        <FaRegClock className="w-6 h-6 text-gray-700 mb-4"/>
                        <h3 className="font-semibold mb-2">Save Time</h3>
                        <p className="text-sm text-gray-600">Get summaries and find specific information without watching entire videos</p>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        <RiBrain2Fill className="w-6 h-6 text-gray-700 mb-4"/>
                        <h3 className="font-semibold mb-2">Deeper Understanding</h3>
                        <p className="text-sm text-gray-600">Ask clarifying questions and explore concepts until you fully understand</p>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        <FiZap className="w-6 h-6 text-gray-700 mb-4"/>
                        <h3 className="font-semibold mb-2">Instant Answers</h3>
                        <p className="text-sm text-gray-600">No more pausing and rewinding—get answers to your questions immediately</p>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        <FaBookOpen className="w-6 h-6 text-gray-700 mb-4"/>
                        <h3 className="font-semibold mb-2">Better Retention</h3>
                        <p className="text-sm text-gray-600">Active engagement and Q&A help you remember information longer</p>
                    </div>
                </div>
            </section>

      
            <section className="bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight mb-6">Our mission</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">We believe that knowledge should be accessible, interactive, and personalized. Our mission is to empower learners worldwide by transforming static video content into dynamic, conversational learning experiences. Whether you're a student, professional, or lifelong learner, we're here to help you learn smarter, not harder.</p>
                    <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                        <i data-lucide="heart" className="w-4 h-4"></i>
                        <span>Built for curious minds everywhere</span>
                    </div>
                </div>
            </section>


            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-2xl font-semibold mb-1">99.9%</div>
                                <div className="text-sm text-gray-600">Accuracy Rate</div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-2xl font-semibold mb-1">&lt;30s</div>
                                <div className="text-sm text-gray-600">Processing Time</div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-2xl font-semibold mb-1">50+</div>
                                <div className="text-sm text-gray-600">Languages</div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="text-2xl font-semibold mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Availability</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Powered by advanced AI</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">Our platform leverages state-of-the-art natural language processing and machine learning models to understand video content with remarkable accuracy. We continuously train and improve our AI to provide you with the most reliable and helpful learning companion.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">Natural Language Processing</span>
                            <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">Machine Learning</span>
                            <span className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">Speech Recognition</span>
                        </div>
                    </div>
                </div>
            </section>

      
            <section className="bg-gray-50 border-y border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight mb-6">Why trust us?</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <IoShieldCheckmark className="w-6 h-6 text-gray-700"/>
                            </div>
                            <h3 className="font-semibold mb-2">Privacy First</h3>
                            <p className="text-sm text-gray-600">Your data and learning habits are private and secure. We never share your information.</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <FaUser className="w-6 h-6 text-gray-700"/>
                            </div>
                            <h3 className="font-semibold mb-2">Trusted by Thousands</h3>
                            <p className="text-sm text-gray-600">Join students, professionals, and lifelong learners who rely on our platform daily.</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MdOutlineRefresh className="w-6 h-6 text-gray-700"/>
                            </div>
                            <h3 className="font-semibold mb-2">Always Improving</h3>
                            <p className="text-sm text-gray-600">We continuously update our AI and features based on user feedback and research.</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default About