#!/usr/bin/env python3
"""Generate Pixopharm marketing voiceover using Fish Audio S2-Pro.

Searches for a Caribbean-accented voice, falls back to a warm neutral if none found.
Output: remotion/public/marketing-vo.mp3
"""

import os
import sys
import json
import requests

API_KEY = os.environ.get("FISH_AUDIO_API_KEY", "")
if not API_KEY:
    print("ERROR: FISH_AUDIO_API_KEY environment variable is not set.", file=sys.stderr)
    sys.exit(1)
API_URL = "https://api.fish.audio/v1/tts"
VOICE_SEARCH_URL = "https://api.fish.audio/v1/model"
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "../remotion/public/marketing-vo.mp3")

# Marketing script — ~26 seconds, warm and confident
SCRIPT = """[warm, inviting, Caribbean warmth in the voice]
From the islands of the Caribbean comes a training platform built just for you.

[encouraging, lifting] Whether you're starting your journey as a pharmacy technician,
or upgrading your skills to work across different islands —
Pixopharm has you covered.

[proud, clear] Twenty-seven courses. Three hundred lessons.
Every module tailored to Caribbean pharmacy regulations —
Trinidad, Jamaica, Barbados, and beyond.

[warm confidence] Learn at your own pace.
Earn certificates that matter.

[inviting, call to action] Start your first course free — no card required.

[warm, final] Join Pixopharm today.
"""

# Pixopharm custom voice (created by Ian on fish.audio)
PIXOPHARM_VOICE = "105982a4589b471b9f80bd93d217f194"

# Henry (British RP narrator from Oathfire) — fallback only
HENRY_VOICE = "55f0cafef00f4e16808bcd75c4b41a6f"


def search_caribbean_voices(headers: dict) -> list:
    """Search Fish Audio model library for Caribbean/warm voices."""
    print("Searching Fish Audio voice library...")
    try:
        # Search for Caribbean English voices
        for query in ["caribbean", "trinidadian", "jamaican", "barbadian", "west indian"]:
            resp = requests.get(
                VOICE_SEARCH_URL,
                headers=headers,
                params={"title": query, "page_size": 10, "task": "tts"},
                timeout=15,
            )
            if resp.status_code == 200:
                data = resp.json()
                items = data.get("items", [])
                if items:
                    print(f"  Found {len(items)} voice(s) for '{query}':")
                    for v in items:
                        print(f"    - {v.get('title', 'Unknown')} [{v.get('_id')}] lang={v.get('languages', [])} tags={v.get('tags', [])}")
                    return items
    except (requests.RequestException, ValueError) as e:
        print(f"  Voice search failed: {e}")
    return []


def generate_audio(headers: dict, voice_id: str, text: str, output_path: str):
    """Call Fish Audio TTS API and stream result to file."""
    payload = {
        "text": text,
        "reference_id": voice_id,
        "format": "mp3",
        "model": "s2-pro",
        "temperature": 0.82,
        "top_p": 0.8,
        "prosody": {
            "speed": 0.95,  # Slightly slower — warm and authoritative
        },
    }

    print("\nGenerating audio...")
    print(f"  Voice: {voice_id}")
    print("  Model: s2-pro | temp=0.82 | speed=0.95")
    print(f"  Text: {len(text)} chars")

    response = requests.post(
        API_URL,
        headers=headers,
        json=payload,
        stream=True,
        timeout=120,
    )
    response.raise_for_status()

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)


def get_duration(path: str) -> str:
    import subprocess
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", path],
        capture_output=True, text=True,
    )
    if result.stdout.strip():
        secs = float(result.stdout.strip())
        return f"{int(secs // 60)}:{int(secs % 60):02d}"
    return "unknown"


def main():
    output_path = os.path.abspath(OUTPUT_FILE)
    print(f"Output: {output_path}")

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }

    # Search for Caribbean voice
    caribbean_voices = search_caribbean_voices(headers)

    # Always use the Pixopharm custom voice
    voice_id = PIXOPHARM_VOICE
    voice_name = "Pixopharm (custom)"
    print(f"\nUsing voice: {voice_name} [{voice_id}]")

    # Generate the audio
    generate_audio(headers, voice_id, SCRIPT, output_path)

    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    duration = get_duration(output_path)

    print(f"\n{'='*55}")
    print(f"DONE: {output_path}")
    print(f"Size: {size_mb:.1f} MB | Duration: {duration}")
    print("\nNext steps:")
    print("  1. Listen to the file to check quality")
    print("  2. In MarketingHero.tsx, uncomment the voiceover <Audio> line")
    print("  3. Render: npx remotion render remotion/src/index.ts MarketingHero")
    print(f"{'='*55}")


if __name__ == "__main__":
    main()
