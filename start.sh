#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
printf '\nVELOCITY — setting up your frontend...\n\n'
if ! command -v npm >/dev/null 2>&1; then
  echo 'Node.js/npm was not found. Install Node.js 20.19+ or 22+.'
  exit 1
fi
if [ ! -d node_modules ]; then npm install; fi
npm run dev
