import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Play, Loader2 } from 'lucide-react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Footer from './Footer';
import Testimonials from './Testimonials'
import HowItWorks from './HowItWorks';
import Features from './Features';
import Navbar from './Navbar';


function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [validating, setValidating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLink, setIsLink] = useState(false)
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
    <div className="bg-white text-gray-900 ">

      <div className="min-h-screen w-full bg-[#f8fafc] relative top-0">

        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e2e8f0 0.5px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 0.5px, transparent 1px)
      `,
            backgroundSize: "50px 60px", // ✅ fixed typo
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />


        <Navbar/>


        <section className="relative z-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
              <HiOutlineSparkles className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">AI-Powered Learning</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              Your Personal <br />YouTube Video <i className='font-bold text-[#024076]'>Guide</i>
            </h1>

            <p className="text-md text-gray-500 mb-12 max-w-2xl mx-auto">
              Transform YouTube videos into interactive learning experiences with AI-powered summaries, quizzes, and personalized tutoring.
            </p>

            {/* //Input Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-2 flex items-center space-x-2 hover:border-gray-300 transition-colors">
                <FaLink className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  ref={inputRef}
                  type="url"
                  id="youtubeUrl"
                  value={youtubeUrl}
                  onChange={handleUrlChange}
                  required
                  placeholder="Paste YouTube URL here..."
                  className="flex-1 bg-transparent outline-none text-base px-2 py-3 text-gray-900 placeholder-gray-400"
                />
                <IoMdClose
                  onClick={() => setYoutubeUrl('')}
                  className={`text-4xl p-2 cursor-pointer hover:bg-gray-200 transition-all rounded-xl ${youtubeUrl.length === 0 ? 'hidden' : 'flex'
                    }`}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading || !youtubeUrl}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center space-x-2 gap-3 group cursor-pointer"
                >
                  {loading ? (
                    <>
                      Starting...
                      <Loader2 className="w-5 h-5 animate-spin mr-3" />
                    </>
                  ) : (
                    <>
                      Start
                      <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-2 transition-all" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-3 flex items-center justify-center space-x-1">
                <i data-lucide="shield-check" className="w-3 h-3"></i>
                <span>No credit card required • Free 3 videos per day</span>
              </p>
            </div>

            {/*// Video Preview */}
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

            {/*// Stats */}
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
      </div>

      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />


    </div>
  )
}

export default Home