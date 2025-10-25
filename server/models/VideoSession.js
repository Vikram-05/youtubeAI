import mongoose from 'mongoose';

const videoSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  videoId: { type: String, required: true },
  transcript: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: Number, default: 0 },
  transcriptSource: {
    type: String,
    enum: ['python_youtube_api', 'fallback'],
    default: 'fallback'
  }
});


const VideoSession = mongoose.model('VideoSession', videoSessionSchema);

export default VideoSession;