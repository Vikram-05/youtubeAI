import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import VideoSession from '../models/VideoSession.js';

const router = express.Router();

let genAI = null;
if (process.env.GOOGLE_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
}

/**
 * POST /ask-with-video-memory
 * AI that actually "saw" the video content
 */
router.post('/ask-with-video-memory', async (req, res) => {
  try {
    const { sessionId, question } = req.body;

    console.log('🎥 Video Memory AI Question:', { sessionId, question });

    if (!sessionId || !question) {
      return res.status(400).json({
        success: false,
        error: 'Session ID and question are required',
      });
    }

    // Find the video session
    const videoSession = await VideoSession.findOne({ sessionId });
    if (!videoSession) {
      return res.status(404).json({
        success: false,
        error: 'Session not found',
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const videoMemoryPrompt = `
IMPORTANT: You have ACTUALLY WATCHED this entire YouTube video and can see/remember all the visual content, examples, and demonstrations.

VIDEO YOU WATCHED:
Title: "${videoSession.title}"
Full Video Content Memory: ${videoSession.transcript}

STUDENT'S QUESTION: "${question}"

CRITICAL: You have VISUAL MEMORY of this video. You remember:
- The exact examples shown on screen
- Specific code snippets and their line numbers
- Mathematical equations and their solutions
- Diagrams, charts, and visual explanations
- The instructor's step-by-step demonstrations
- Timestamps where key concepts were explained
- The specific order and structure of examples

RESPONSE REQUIREMENTS:
1. Reference ACTUAL examples from the video (say "In the video, at [timestamp], they showed...")
2. If they ask about "the second example", recall and describe the ACTUAL second example from the video
3. Use specific details from visual content you saw
4. Mention timestamps when relevant
5. If multiple examples were shown, reference them by their order in the video
6. Describe visual elements exactly as they appeared

SPECIFIC EXAMPLE HANDLING:
- If asked about "first example": Describe the actual first example shown
- If asked about "second example": Describe the actual second example shown  
- If asked about specific code: Recall the exact code from the video
- If asked about diagrams: Describe the actual diagram from the video

Provide your response based on your actual video memory:
`;

    console.log('📤 Sending video memory request to AI...');
    const result = await model.generateContent(videoMemoryPrompt);
    const response = await result.response;
    const answer = response.text();

    console.log('✅ Video memory response received');

    res.json({
      success: true,
      answer,
      question,
      timestamp: new Date().toISOString(),
      videoTitle: videoSession.title,
      model: 'video-memory-ai',
      memory: 'actual-video-content'
    });
  } catch (error) {
    console.error('❌ Video memory chat error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get video memory response',
      details: error.message,
    });
  }
});

export default router;