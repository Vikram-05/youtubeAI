import React from 'react'
import { GrNotes } from "react-icons/gr";
import { FaBahai } from "react-icons/fa";
import { SiQuizlet } from "react-icons/si";
import { FaNoteSticky } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineSave } from "react-icons/md";

function Features() {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Everything you need to learn</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Powerful features that transform passive video watching into active, engaging learning experiences.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                            <GrNotes className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">AI Summaries</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Get instant, intelligent summaries of any video. Our AI extracts key concepts, timestamps, and actionable insights.</p>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                            <FaBahai className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">Interactive Q&A</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Ask questions about the video content and get instant, context-aware answers from our AI tutor.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">

                            <SiQuizlet className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">Smart Quizzes</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Test your understanding with automatically generated quizzes based on the video content.</p>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                            <FaNoteSticky className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">Study Notes</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Automatically generated, well-structured notes that you can edit, organize, and export.</p>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                            <GrLanguage className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">Multi-Language</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Learn from videos in any language with automatic translation and transcription support.</p>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                            <MdOutlineSave className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">Save Progress</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Track your learning journey with saved videos, notes, and progress analytics across all devices.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Features