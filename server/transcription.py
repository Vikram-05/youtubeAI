# transcription.py
from youtube_transcript_api import YouTubeTranscriptApi
import sys
import json
import io
from typing import Any, List, Dict

def get_video_id(url):
    url = url.strip()
    if "watch?v=" in url:
        return url.split("watch?v=")[-1].split("&")[0]
    elif "youtu.be/" in url:
        return url.split("youtu.be/")[-1].split("?")[0]
    else:
        return url

def _to_plain(item: Any) -> Dict:
    # Convert transcript item to a plain dict with common fields
    if isinstance(item, dict):
        return item
    result = {}
    for key in ("text", "start", "duration", "confidence"):
        if isinstance(item, dict) and key in item:
            result[key] = item[key]
        elif hasattr(item, key):
            result[key] = getattr(item, key)
    if result:
        return result
    # fallback: try __dict__ / vars
    try:
        return dict(vars(item))
    except Exception:
        return {"value": str(item)}

def _normalize_transcript(raw: Any) -> List[Dict]:
    # Normalizes different return shapes into a list of plain dicts
    if isinstance(raw, list):
        return [_to_plain(it) for it in raw]
    # try to iterate
    try:
        items = list(raw)
        return [_to_plain(it) for it in items]
    except Exception:
        pass
    # common attributes on some library objects
    for attr in ("transcripts", "results", "transcript", "snippets"):
        if hasattr(raw, attr):
            val = getattr(raw, attr)
            if isinstance(val, list):
                return [_to_plain(it) for it in val]
            try:
                return [_to_plain(it) for it in list(val)]
            except Exception:
                continue
    # dict-like fallback
    if isinstance(raw, dict):
        return [raw]
    return [{"value": str(raw)}]

def fetch_transcript(video_url):
    video_id = get_video_id(video_url)
    print("id  => ", video_id)
    ytt_api = YouTubeTranscriptApi()
    raw = ytt_api.fetch(
        video_id,
        languages=['en', 'hi', 'pa', 'mr', 'kn', 'ta', 'te', 'ml', 'gu', 'bn', 'or', 'as', 'ur'],
        preserve_formatting=True
    )
    transcript = _normalize_transcript(raw)
    # debug: length and sample first item
    print("transcript length =>", len(transcript) if isinstance(transcript, list) else 1)
    return transcript

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: YouTube URL is required")
        sys.exit(1)
    
    # Ensure stdout uses UTF-8 on Windows to prevent "charmap" codec errors
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

    video_url = sys.argv[1]
    try:
        text = fetch_transcript(video_url)
        # Print as JSON preserving unicode characters
        print(json.dumps(text, ensure_ascii=False))
    except Exception as e:
        # JSON-safe error output
        try:
            print(json.dumps({"error": str(e)}, ensure_ascii=False))
        except Exception:
            print(f"Error fetching transcript: {e}")
        sys.exit(1)