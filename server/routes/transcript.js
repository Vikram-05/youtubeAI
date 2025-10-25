import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import VideoSession from '../models/VideoSession.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function extractVideoId(url) {
  if (!url) return null;
  if (url.includes('watch?v=')) return url.split('watch?v=')[1].split('&')[0];
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
  return url; // assume it's already an ID
}


function fetchTranscript(youtubeUrl) {
  return new Promise((resolve, reject) => {
    const pythonScriptPath = path.join(__dirname,'..', 'transcription.py');
    // console.log('🐍 Python script path:', pythonScriptPath);
    // console.log('📹 YouTube URL:', youtubeUrl);

    const pythonProcess = spawn('python', [pythonScriptPath, youtubeUrl]);

    let transcript = '';
    let errorOutput = '';

    pythonProcess.stdout.on('data', (data) => {
      const text = data.toString();
      console.log('📄 Python stdout chunk:', text);
      transcript += text;
    });

    pythonProcess.stderr.on('data', (data) => {
      const errText = data.toString();
      console.error('⚠️ Python stderr chunk:', errText);
      errorOutput += errText;
    });

    pythonProcess.on('close', (code) => {
      console.log('🐍 Python process exited with code:', code);
      if (code === 0) {
        console.log('✅ Transcript fetched successfully');
        resolve(transcript.trim());
      } else {
        console.error('❌ Python script failed with errors:', errorOutput);
        reject(new Error(errorOutput || 'Python script failed'));
      }
    });

    pythonProcess.on('error', (err) => {
      console.error('💥 Failed to start Python process:', err);
      reject(err);
    });
  });
}



router.post('/get-enhanced-transcript', async (req, res) => {
  try {
    const { youtubeUrl } = req.body;
    if (!youtubeUrl) return res.status(400).json({ error: 'YouTube URL is required' });

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) return res.status(400).json({ error: 'Invalid YouTube URL' });

    let transcript = '';
    try {
      transcript = await fetchTranscript(youtubeUrl);
      console.log("tr => ",transcript)
      if (!transcript) throw new Error('Empty transcript');
    } catch {
      transcript = `Transcript not available for video ID ${videoId}.`;
    }

    const sessionId = uuidv4();
    const videoSession = new VideoSession({
      sessionId,
      youtubeUrl,
      videoId,
      transcript,
      title: `YouTube Video ${videoId}`,
      duration: 0,
      transcriptSource: 'python_youtube_api'
    });

    await videoSession.save();

    res.json({
      success: true,
      sessionId,
      transcript,
      title: videoSession.title,
      duration: videoSession.duration,
      videoId,
      transcriptSource: videoSession.transcriptSource
    });

  } catch (err) {
    console.error('Transcript error:', err);
    res.status(500).json({ success: false, error: 'Failed to process video', details: err.message });
  }
});

export default router;
