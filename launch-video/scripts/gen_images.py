#!/usr/bin/env python3
"""Generate Instagram reel background images with Nano Banana Pro (Gemini image API)."""
import base64
import json
import pathlib
import sys
import time
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
KEY = json.load(open(ROOT.parent / "nano.json"))["apikey"]
OUT = ROOT / "assets" / "ig"
OUT.mkdir(parents=True, exist_ok=True)

MODEL = "gemini-3-pro-image-preview"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

STYLE = (
    "Cinematic realistic photograph, moody dark navy-blue night palette (#07080F to #112849), "
    "high contrast, soft volumetric light, film grain, premium sports-brand atmosphere. "
    "Calm and composed, not hype. No visible brand logos, no text or letters anywhere in the "
    "image, no recognizable close-up faces. Vertical 9:16 composition with generous negative "
    "space in the upper third for text overlay."
)

IMAGES = {
    "ig-coach-night": (
        "An amateur football coach sitting alone at night in a modest club office, lit only by "
        "his phone screen, paper attendance sheets and a tactics notebook on the desk, seen from "
        "behind at three-quarter angle so the face is not recognizable."
    ),
    "ig-pitch-night": (
        "An empty amateur football pitch at night under four floodlights, light fog catching the "
        "beams, wet grass reflections, low wide angle from pitch level."
    ),
    "ig-physio": (
        "A physiotherapist's gloved hands treating the hamstring of a football player lying on a "
        "treatment table in a modest club medical room, kinesiology tape roll nearby, dim warm "
        "lamp in dark navy shadows, framed on hands and leg only."
    ),
    "ig-training-night": (
        "Amateur football players running an evening training drill between cones, strong motion "
        "blur, backlit by floodlights creating rim light silhouettes, dark navy night sky."
    ),
    "ig-tactic-tablet": (
        "Close-up of a coach's hands holding a tablet showing an abstract glowing blue tactical "
        "pitch diagram with player dots and arrows (no readable text), standing at the touchline "
        "of a floodlit pitch at dusk, blurred pitch in background."
    ),
}


def generate(name: str, prompt: str) -> bool:
    body = {
        "contents": [{"parts": [{"text": prompt + " " + STYLE}]}],
        "generationConfig": {
            "responseModalities": ["IMAGE"],
            "imageConfig": {"aspectRatio": "9:16", "imageSize": "2K"},
        },
    }
    req = urllib.request.Request(
        URL,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": KEY},
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                data = json.load(r)
            for part in data["candidates"][0]["content"]["parts"]:
                if "inlineData" in part:
                    png = base64.b64decode(part["inlineData"]["data"])
                    (OUT / f"{name}.png").write_bytes(png)
                    print(f"OK {name} ({len(png) // 1024} KB)")
                    return True
            print(f"NO-IMAGE {name}: {json.dumps(data)[:300]}")
            return False
        except Exception as e:  # noqa: BLE001
            detail = ""
            if hasattr(e, "read"):
                try:
                    detail = e.read().decode()[:300]
                except Exception:  # noqa: BLE001
                    pass
            print(f"RETRY {name} attempt {attempt + 1}: {e} {detail}")
            time.sleep(8)
    return False


if __name__ == "__main__":
    failed = [n for n, p in IMAGES.items() if not generate(n, p)]
    sys.exit(1 if failed else 0)
