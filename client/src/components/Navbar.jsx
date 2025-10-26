import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="fixed top-0 left-0 w-full z-[1000]">
            <div className="md:w-[800px] m-auto md:rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm mt-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div onClick={() => navigate("/")} className="cursor-pointer flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-semibold tracking-tight">YT</span>
                            </div>
                            {/* <span className="text-lg font-semibold tracking-tight">YouTube AI Tutor</span> */}
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
                            <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
                            <a href="#documentation" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => inputRef.current?.focus()}
                                className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar