import express from 'express';
import VideoSession from '../models/VideoSession.js';

const router = express.Router();

// Get session by ID
router.get('/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    console.log('📋 Fetching session:', sessionId);
    
    const session = await VideoSession.findOne({ sessionId });
    
    if (!session) {
      return res.status(404).json({ 
        success: false,
        error: 'Session not found' 
      });
    }
    
    res.json({
      success: true,
      session: {
        sessionId: session.sessionId,
        youtubeUrl: session.youtubeUrl,
        videoId: session.videoId,
        title: session.title,
        duration: session.duration,
        transcriptSource: session.transcriptSource,
        createdAt: session.createdAt
      }
    });
  } catch (error) {
    console.error('❌ Session fetch error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch session' 
    });
  }
});

export default router;