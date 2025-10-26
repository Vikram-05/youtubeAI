import React from 'react'

function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">How it works</h2>
                    <p className="text-lg text-gray-600">Simple process, powerful results</p>
                </div>

                <div className="space-y-12">

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold">1</div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 tracking-tight">Paste YouTube URL</h3>
                            <p className="text-gray-600 mb-4">Copy any YouTube video link and paste it into our input field. Our system validates the URL and checks video availability instantly.</p>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <code className="text-sm text-gray-800">https://youtube.com/watch?v=example123</code>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold">2</div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 tracking-tight">AI Processing</h3>
                            <p className="text-gray-600 mb-4">Our AI extracts transcripts, analyzes content, identifies key concepts, and generates comprehensive learning materials. This typically takes 10-30 seconds.</p>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <i data-lucide="loader" className="w-4 h-4"></i>
                                <span>Processing video...</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold">3</div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 tracking-tight">Start Learning</h3>
                            <p className="text-gray-600 mb-4">Access your personalized learning dashboard with summaries, interactive Q&A, quizzes, and study notes. Ask questions, take tests, and track your progress.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Summary</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Q&A Chat</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Quiz</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Notes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks