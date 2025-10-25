import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Play, Youtube, Loader2, AlertCircle, CheckCircle, Star, Zap, Shield, Sparkles } from 'lucide-react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { FaBahai } from "react-icons/fa";
import { SiQuizlet } from "react-icons/si";
import { FaNoteSticky } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineSave } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";

function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [validating, setValidating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  }

  const validateUrl = async (url) => {
    if (!url) return false;

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('Please enter a valid YouTube URL');
      return false;
    }

    setValidating(true);
    try {
      const response = await axios.post('/api/simple/validate-url', {
        youtubeUrl: url
      });

      if (response.data.success) {
        setSuccess(`✓ Valid YouTube video: "${response.data.videoInfo.title}"`);
        setError('');
        return true;
      }
    } catch (err) {
      console.log('URL validation failed:', err);
      // Don't set error here - we'll try to process anyway
    } finally {
      setValidating(false);
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!youtubeUrl) return

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await axios.post('/api/transcript/get-enhanced-transcript', {
        youtubeUrl
      }, {
        timeout: 30000
      })

      if (response.data.success) {
        navigate(`/session/${response.data.sessionId}`)
      } else {
        throw new Error(response.data.error || 'Failed to process video')
      }
    } catch (err) {
      console.error('Video processing error:', err)
      let errorMessage = 'Failed to process video. ';

      if (err.code === 'ECONNABORTED') {
        errorMessage += 'Request timed out. Please try again.';
      } else if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.response?.data?.details) {
        errorMessage += err.response.data.details;
      } else if (err.message) {
        errorMessage += err.message;
      }

      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleUrlChange = async (e) => {
    const url = e.target.value;
    setYoutubeUrl(url);
    setError('');
    setSuccess('');

    if (url) {
      await validateUrl(url);
    }
  }

  const videoId = extractVideoId(youtubeUrl)
  const inputRef = useRef(null)



  return (
    <div className="bg-white text-gray-900">


      <nav className="md:w-[800px] md:mt-5 m-auto md:rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 md:top-5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
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
              {/* <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-4 py-2">Sign In</button> */}
              <button onClick={() => inputRef.current?.focus()} className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Get Started</button>
            </div>
          </div>
        </div>
      </nav>


      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-gray-700" />
            <span className="text-sm text-gray-700">AI-Powered Learning</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
            Your Personal <br />YouTube Video Guide
          </h1>
          <p className="text-md text-gray-500 mb-12 max-w-2xl mx-auto">
            Transform YouTube videos into interactive learning experiences with AI-powered summaries, quizzes, and personalized tutoring.
          </p>


          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-2 flex items-center space-x-2 hover:border-gray-300 transition-colors">
              <FaLink className="w-5 h-5 text-gray-400 ml-3"/>
             
              <input
                ref={inputRef}
                type="url"
                id="youtubeUrl"
                value={youtubeUrl}
                onChange={handleUrlChange}
                required
                placeholder="Paste YouTube URL here..."
                className=" flex-1 bg-transparent outline-none text-base px-2 py-3 text-gray-900 placeholder-gray-400"
              />
              <button
                onClick={handleSubmit}
                disabled={loading || !youtubeUrl}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center space-x-2 gap-3 group cursor-pointer ">
               {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-3" />
                    Creating Your Session...
                  </>
                ) : (
                  <>
                    Start
                    <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-2 transition-all"/>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3 flex items-center justify-center space-x-1">
              <i data-lucide="shield-check" className="w-3 h-3"></i>
              <span>No credit card required • Free 3 videos per day</span>
            </p>
          </div>
            {videoId && (
              <div className="mt-10 flex justify-center p-3 border rounded-xl">
                <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  <div className="relative aspect-video group">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 sm:p-8 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-200">
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-1">2M+</div>
              <div className="text-sm text-gray-600">Videos Processed</div>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-1">500K+</div>
              <div className="text-sm text-gray-600">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Everything you need to learn</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Powerful features that transform passive video watching into active, engaging learning experiences.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                <GrNotes className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">AI Summaries</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Get instant, intelligent summaries of any video. Our AI extracts key concepts, timestamps, and actionable insights.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                <FaBahai className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Interactive Q&A</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Ask questions about the video content and get instant, context-aware answers from our AI tutor.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                
                <SiQuizlet className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Smart Quizzes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Test your understanding with automatically generated quizzes based on the video content.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                <FaNoteSticky className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Study Notes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Automatically generated, well-structured notes that you can edit, organize, and export.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                <GrLanguage className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Multi-Language</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Learn from videos in any language with automatic translation and transcription support.</p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-all hover:shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                <MdOutlineSave className="w-6 h-6 text-gray-900"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Save Progress</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Track your learning journey with saved videos, notes, and progress analytics across all devices.</p>
            </div>
          </div>
        </div>
      </section>


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
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"This tool completely changed how I study. I can now learn from lectures and tutorials 3x faster with the AI summaries and quizzes."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Vikram Kumar</div>
                  <div className="text-xs text-gray-600">Computer Science Student</div>
                </div>
              </div>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"The Q&A feature is incredible. It's like having a personal tutor who has watched every video and can answer any question instantly."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Vikasa Rama HR</div>
                  <div className="text-xs text-gray-600">Self-taught Developer</div>
                </div>
              </div>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                  <i data-lucide="star" className="w-4 h-4 fill-gray-900 text-gray-900"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"Perfect for visual learners like me. The auto-generated notes with timestamps help me review specific sections without rewatching entire videos."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
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


      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold tracking-tight">YT</span>
                </div>
                <span className="font-semibold tracking-tight">YouTube AI Tutor</span>
              </div>
              <p className="text-sm text-gray-600">Transform any YouTube video into an interactive learning experience.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600">© 2024 YouTube AI Tutor. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <i data-lucide="twitter" className="w-5 h-5"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <i data-lucide="github" className="w-5 h-5"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <i data-lucide="linkedin" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Home