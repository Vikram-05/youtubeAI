import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Check, Zap, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Price() {
    const navigate = useNavigate()
    return (
        <div className="bg-white text-gray-900 font-sans antialiased">
            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h1>
                    <p className="text-lg text-gray-600 mb-2">Choose the perfect plan for your learning journey</p>
                    <p className="text-sm text-gray-500">All plans work with both educational and non-educational videos</p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Basic Plan */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Basic</h3>
                            <p className="text-sm text-gray-600">Perfect for casual learners getting started</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-semibold tracking-tight">$9</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                        </div>

                        <button className="w-full bg-white border border-gray-900 text-gray-900 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors mb-8">
                            Start with Basic
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">10 videos per month</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Process up to 10 YouTube videos monthly</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">AI-powered summaries</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Get concise summaries of video content</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">20 Q&A queries per video</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Ask questions about video content</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Up to 30-minute videos</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Process videos up to 30 minutes long</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Email support</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Get help when you need it</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="border-2 border-gray-900 rounded-xl p-8 relative hover:shadow-xl transition-all">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Pro</h3>
                            <p className="text-sm text-gray-600">Ideal for students and active learners</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-semibold tracking-tight">$29</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                        </div>

                        <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors mb-8">
                            Start with Pro
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">50 videos per month</p>
                                    <p className="text-xs text-gray-600 mt-0.5">5x more videos than Basic plan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Advanced AI summaries</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Detailed summaries with timestamps</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Unlimited Q&A queries per video</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Deep dive with more questions</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Up to 5-hour videos</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Perfect for lectures and long content</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Key points extraction</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Automatically identify important concepts</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Export notes & summaries</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Download in PDF or markdown format</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Priority email support</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Faster response times</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Premium</h3>
                            <p className="text-sm text-gray-600">For power users and professionals</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-semibold tracking-tight">$79</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                        </div>

                        <button className="w-full bg-white border border-gray-900 text-gray-900 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors mb-8">
                            Start with Premium
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Unlimited videos</p>
                                    <p className="text-xs text-gray-600 mt-0.5">No monthly limits on video processing</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Premium AI summaries</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Most detailed summaries with insights</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Unlimited Q&A queries</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Ask as many questions as you need</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Up to 12-hour videos</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Perfect for lectures and long content</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Unlimited video length</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Process videos of any duration</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Multi-video analysis</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Compare and analyze multiple videos</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Custom study guides</p>
                                    <p className="text-xs text-gray-600 mt-0.5">AI-generated personalized study materials</p>
                                </div>
                            </div>

                           

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">Team collaboration</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Share notes with up to 5 team members</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                    <p className="text-sm font-medium">24/7 priority support</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Chat and email support anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Why upgrade your plan?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Unlock more features and capabilities as your learning needs grow</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Learn Faster</h3>
                            <p className="text-sm text-gray-600">Process more videos and get instant answers to your questions. Higher plans mean more content coverage and deeper understanding.</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Better Insights</h3>
                            <p className="text-sm text-gray-600">Premium plans offer more sophisticated AI analysis, key point extraction, and detailed summaries that help you grasp complex topics faster.</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Collaborate & Share</h3>
                            <p className="text-sm text-gray-600">With Premium, work together with your team or study group. Share notes, summaries, and insights effortlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Frequently asked questions</h2>

                    <div className="space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-base font-semibold mb-2">What types of videos can I process?</h3>
                            <p className="text-sm text-gray-600">All plans support both educational and non-educational YouTube videos. Whether you're learning programming, watching documentaries, or exploring new hobbies, our AI tutor works with any video content.</p>
                        </div>

                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-base font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                            <p className="text-sm text-gray-600">Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle.</p>
                        </div>

                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-base font-semibold mb-2">What happens if I exceed my video limit?</h3>
                            <p className="text-sm text-gray-600">For Basic and Pro plans, you'll be notified when approaching your limit. You can either wait for your next billing cycle or upgrade to a higher plan for immediate access to more videos.</p>
                        </div>

                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-base font-semibold mb-2">Do unused videos roll over to the next month?</h3>
                            <p className="text-sm text-gray-600">Video limits reset at the beginning of each billing cycle and do not roll over. However, all your previously processed videos and their summaries remain accessible in your account.</p>
                        </div>

                        <div className="pb-6">
                            <h3 className="text-base font-semibold mb-2">Is there a free trial available?</h3>
                            <p className="text-sm text-gray-600">Yes! All plans come with a 7-day free trial. No credit card required to start your trial. Experience the full features of your chosen plan before committing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to transform your learning?</h2>
                        <p className="text-lg text-gray-600 mb-8">Start your 7-day free trial today. No credit card required.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => navigate("/")} className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Get Started Free</button>
                            <button onClick={() => navigate("/contact")} className="border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Price