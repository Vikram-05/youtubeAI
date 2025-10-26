import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoSession from './components/VideoSession'
import VideoSummary from './components/VideoSummary '
import Contact from './components/Contact'
import Price from './components/Price'
import About from './components/About'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session/:sessionId" element={<VideoSession />} />
          <Route path="/summary/:sessionId" element={<VideoSummary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App