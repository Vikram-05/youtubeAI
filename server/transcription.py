# transcription.py
from youtube_transcript_api import YouTubeTranscriptApi
import sys

def get_video_id(url):
    url = url.strip()
    if "watch?v=" in url:
        return url.split("watch?v=")[-1].split("&")[0]
    elif "youtu.be/" in url:
        return url.split("youtu.be/")[-1].split("?")[0]
    else:
        return url

def fetch_transcript(video_url):
    video_id = get_video_id(video_url)
    ytt_api = YouTubeTranscriptApi()
    transcript = ytt_api.fetch(video_id, languages=['en', 'hi', 'pa', 'mr', 'kn', 'ta', 'te', 'ml', 'gu', 'bn', 'or', 'as', 'ur'])
    # transcript = " ".join([snippet.text for snippet in transcript.snippets])
    return transcript

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: YouTube URL is required")
        sys.exit(1)
    
    video_url = sys.argv[1]
    try:
        text = fetch_transcript(video_url)
        print(text)
    except Exception as e:
        print(f"Error fetching transcript: {e}")
        sys.exit(1)