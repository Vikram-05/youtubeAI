import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import transcriptRoutes from './routes/transcript.js';
import simpleTranscriptRoutes from './routes/simple-transcript.js';
import chatRoutes from './routes/chat.js';
import videoRoutes from './routes/videos.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/youtube-ai-tutor';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/transcript', transcriptRoutes);
app.use('/api/simple', simpleTranscriptRoutes); // Add simple transcript route
app.use('/api/chat', chatRoutes);
app.use('/api/videos', videoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: '🚀 Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Test route for basic functionality
app.get('/api/test', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'Server is working',
    version: '1.0.0'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎯 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});