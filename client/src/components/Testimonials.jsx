import vikram from '../../public/vikram.png'
import vikas from '../../public/vikas.png'
import vansh from '../../public/vansh.jpeg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


import React from 'react'

function Testimonials() {
    return (
        <>
            <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Loved by learners</h2>
                        <p className="text-lg text-gray-600">See what our users have to say</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStarHalfAlt className="w-4 h-4 fill-gray-900 text-gray-900" />
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">"This tool completely changed how I study. I can now learn from lectures and tutorials 3x faster with the AI summaries and quizzes."</p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                    <img className='' src={vikram} alt="" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Vikram Kumar</div>
                                    <div className="text-xs text-gray-600">Computer Science Student</div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "The Q&A feature is incredible. It's like having a personal tutor who has watched every video and can answer any question instantly."</p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">

                                    <img className='' src={vikas} alt="" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Vikasa Rama HR</div>
                                    <div className="text-xs text-gray-600">Self-taught Developer</div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white border border-gray-200 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" />
                                    <FaStar className="w-4 h-4 fill-gray-900 text-gray-900" /></div>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">"Perfect for visual learners like me. The auto-generated notes with timestamps help me review specific sections without rewatching entire videos."</p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                    <img className='' src={vansh} alt="" />

                                </div>
                                <div>
                                    <div className="font-medium text-sm">Vansh srivastava</div>
                                    <div className="text-xs text-gray-600">Medical Student</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Start learning smarter today</h2>
                    <p className="text-xl text-gray-600 mb-8">Join thousands of learners transforming YouTube videos into knowledge.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => inputRef.current?.focus()} className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-base font-medium w-full sm:w-auto">
                            Get Started Free
                        </button>
                        <button onClick={() => inputRef.current?.focus()} className="border border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-base font-medium w-full sm:w-auto">
                            View Demo
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-6">No credit card required • 3 free videos daily</p>
                </div>
            </section>
        </>
    )
}

export default Testimonials