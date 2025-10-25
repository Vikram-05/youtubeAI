import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import VideoSession from '../models/VideoSession.js';

const router = express.Router();

// Extract video ID from YouTube URL
const extractVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

const getVideoInfoSimple = async (videoId) => {
  try {
    const oembedResponse = await axios.get(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { timeout: 10000 }
    );
    return {
      title: oembedResponse.data.title,
      author: oembedResponse.data.author_name,
      thumbnail: oembedResponse.data.thumbnail_url
    };
  } catch (error) {
    console.log('❌ oEmbed API failed, using generic title...');
    return {
      title: `Educational Video - ${videoId}`,
      author: 'YouTube Creator',
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };
  }
};

router.post('/get-transcript-simple', async (req, res) => {
  try {
    const { youtubeUrl } = req.body;
    
    if (!youtubeUrl) {
      return res.status(400).json({ 
        success: false,
        error: 'YouTube URL is required' 
      });
    }

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid YouTube URL format' 
      });
    }

    console.log('🎬 Processing Video ID:', videoId);

    // Get basic video info
    const videoInfo = await getVideoInfoSimple(videoId);
    const title = videoInfo.title;

    // Create a generic transcript
    const transcriptText = `This is an educational YouTube video titled "${title}". The video covers topics related to its subject matter. The AI assistant will provide helpful explanations and answers based on general knowledge about the topic discussed in the video.`;

    // Create session
    const sessionId = uuidv4();
    const videoSession = new VideoSession({
      sessionId,
      youtubeUrl,
      videoId,
      transcript: transcriptText,
      title,
      duration: 600,
      transcriptSource: 'generic'
    });

    await videoSession.save();

    res.json({
      success: true,
      sessionId,
      videoId,
      title,
      transcript: transcriptText,
      transcriptSource: 'generic',
      message: 'Video session created successfully. AI will help with general knowledge about the topic.'
    });

  } catch (error) {
    console.error('❌ Simple transcript error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create video session',
      details: error.message
    });
  }
});

// Test endpoint for URL validation
router.post('/validate-url', async (req, res) => {
  try {
    const { youtubeUrl } = req.body;
    
    if (!youtubeUrl) {
      return res.status(400).json({ 
        success: false,
        error: 'YouTube URL is required' 
      });
    }

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid YouTube URL format' 
      });
    }

    const videoInfo = await getVideoInfoSimple(videoId);

    res.json({
      success: true,
      videoId,
      videoInfo,
      message: 'URL is valid and ready for processing'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to validate URL',
      details: error.message
    });
  }
});

export default router;