import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import VideoSession from '../models/VideoSession.js';
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

// Initialize Gemini AI
let genAI = null;
let aiEnabled = false;

if (process.env.GOOGLE_API_KEY) {
  try {
    genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    aiEnabled = true;
    console.log('✅ Gemini AI initialized successfully');
  } catch (error) {
    console.log('❌ Gemini AI initialization failed:', error.message);
  }
} else {
  console.log('❌ GOOGLE_API_KEY not found in environment variables');
}

router.post('/ask-question', async (req, res) => {
  try {
    const { sessionId, question } = req.body;

    if (!sessionId || !question) {
      return res.status(400).json({ success: false, error: 'Session ID and question are required' });
    }

    if (!aiEnabled || !genAI) {
      return res.status(500).json({
        success: false,
        error: 'AI service not configured. Set GOOGLE_API_KEY environment variable.',
      });
    }

    const videoSession = await VideoSession.findOne({ sessionId });
    if (!videoSession) {
      return res.status(404).json({ success: false, error: 'Session not found' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    const prompt = `
ROLE: You are the actual creator of this YouTube video. You remember filming every part personally.

VIDEO CONTEXT:
Title: "${videoSession.title}"
Full Content: ${videoSession.transcript}

STUDENT'S QUESTION: "${question}"

RESPONSE RULES:
1. Respond in EXACTLY the same language as the question
2. Keep it SHORT and conversational - like talking to a friend
3. Use "I", "me", "we" - you're the teacher who made the video
4. Be human: use casual language, contractions, natural expressions
5. Mention 1-2 specific moments from filming using timestamps
6. No long explanations - get straight to the point
7. Sound like you're having a quick chat, not giving a lecture

TIMESTAMP FORMAT:
<TimeStamp time="MM:SS">brief context</TimeStamp>

BAD EXAMPLES (avoid these):
- "Based on the video content analysis..."
- "The instructor demonstrated..."
- Long paragraphs with multiple points
- Formal academic language

GOOD EXAMPLES (do this):
- "Haan maine yeh bataya tha around <TimeStamp time="02:15">2:15 pe</TimeStamp>"
- "Yes I showed this when I was coding live"
- "Nahi actually maine uss part mein explain nahi kiya"
- Keep it under 4-5 lines maximum

REMEMBER:
- You're the video creator having a quick chat
- Answer directly and briefly
- Use the same language as the question
- Sound human and relatable
- No robotic or formal language`;

    console.log('📤 Sending request to Gemini AI...');
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const answer = response.text();

    console.log('✅ AI Response received');

    res.json({
      success: true,
      answer,
      question,
      videoTitle: videoSession.title,
      model: 'gemini-2.5-flash'
    });

  } catch (error) {
    console.error('❌ Chat error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get AI response',
      details: error.message,
    });
  }
});

router.post('/generate-summary', async (req, res) => {
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ success: false, error: 'Session ID is required' });
    }

    if (!aiEnabled || !genAI) {
      return res.status(500).json({
        success: false,
        error: 'AI service not configured. Set GOOGLE_API_KEY environment variable.',
      });
    }

    const videoSession = await VideoSession.findOne({ sessionId });
    if (!videoSession) {
      return res.status(404).json({ success: false, error: 'Session not found' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

   const prompt = `
   You are an expert content summarizer. Your task is to create a concise, well-structured Markdown summary from any video content.

# TASK
Extract the **core essence and key information** and create a **two-column friendly Markdown summary**. Focus only on the most important points, insights, and actionable information.

# CONTEXT
**Video Title:** ${videoSession.title}
**Transcript:** ${videoSession.transcript}

# CRITICAL INSTRUCTIONS
- **DO NOT** include the full transcript or reproduce verbatim content
- **ONLY** extract and summarize the most valuable information
- **IGNORE** repetitive content, filler words, and non-essential details
- Focus on **what matters for understanding and application**

# OUTPUT REQUIREMENTS
- Use **Markdown syntax only** (no HTML)
- Keep content **dense but readable**
- Use **short bullet points** (1 line each maximum)
- Each section should be **self-contained and skimmable**
- Include **Mermaid diagrams ONLY** when they significantly clarify complex processes
- Write in **clear, engaging tone** appropriate to the content

# UNIVERSAL SUMMARY STRUCTURE
## 🎯 Main Points
- [2-4 core messages or central ideas]
- [Each as one concise bullet point]

## 💡 Key Insights
- [3-5 important revelations, findings, or "aha" moments]
- [What stood out as most valuable]

## 🛠️ Actionable Takeaways
- [2-4 practical applications or next steps]
- [What you can do with this information]

## ⚠️ Important Notes
- [2-3 caveats, limitations, or critical details]
- [What to keep in mind]

## 📌 Quick Facts
- [Essential data, statistics, or reference points]
- [Maximum 3-4 items for quick recall]

# CONTENT ADAPTATION
Adjust tone and emphasis based on content type:
- **Educational**: Focus on concepts and learning
- **Tutorial**: Emphasize steps and practical application
- **Entertainment**: Highlight key moments and themes
- **News/Documentary**: Prioritize facts and implications
- **Business**: Focus on insights and strategic value

# QUALITY CHECKS
Before finalizing, ensure:
✅ Only includes summarized content (not transcript reproduction)
✅ Each point is truly valuable and condensed
✅ No redundant or obvious information
✅ Structure supports two-column layout
✅ Language is concise and appropriate for the content type


`;


    console.log('📤 Generating improved video summary...');

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'X-Content-Type-Options': 'nosniff'
    });

    const result = await model.generateContentStream(prompt);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }

    res.end();

  } catch (error) {
    console.error('❌ Summary generation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate video summary',
      details: error.message,
    });
  }
});

export default router;