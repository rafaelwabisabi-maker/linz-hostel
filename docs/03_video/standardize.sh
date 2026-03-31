#!/bin/bash
# standardize.sh — Normalize all video clips to same format
# Usage: bash standardize.sh [optional-clips-dir]
# Default: looks for clips/ in same directory as script (for local Pipeline A use)
# For Remotion V3 use: bash standardize.sh ~/remotion-videos/public/broll/v3/

set -e

CLIPS_DIR="${1:-$(dirname "$0")/clips}"
RESOLUTION="1920:1080"
FPS=30
CRF=23

echo "🎬 Standardizing clips in $CLIPS_DIR..."
echo "   Resolution: ${RESOLUTION}, FPS: ${FPS}, CRF: ${CRF}"
echo ""

count=0
for f in "$CLIPS_DIR"/*.mp4; do
  [ -f "$f" ] || continue

  # Skip already standardized files
  [[ "$f" == *"-std.mp4" ]] && continue

  base="${f%.mp4}"
  out="${base}-std.mp4"

  if [ -f "$out" ]; then
    echo "⏭  $(basename "$f") — already standardized, skipping"
    continue
  fi

  echo "🔄 $(basename "$f")..."
  ffmpeg -i "$f" \
    -vf "scale=${RESOLUTION}:force_original_aspect_ratio=decrease,pad=${RESOLUTION}:(ow-iw)/2:(oh-ih)/2:color=4A4543" \
    -r "$FPS" \
    -c:v libx264 -preset fast -crf "$CRF" \
    -c:a aac -b:a 128k \
    -y "$out" 2>/dev/null

  count=$((count + 1))
done

echo ""
echo "✅ Standardized $count clips."
echo "   Originals preserved. Standardized files have -std.mp4 suffix."
