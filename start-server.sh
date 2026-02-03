#!/usr/bin/env bash
# Start a local server so you can view the site at http://localhost:3000
# Usage: ./start-server.sh   or   bash start-server.sh
# Stop the server with Ctrl+C

cd "$(dirname "$0")"
echo ""
echo "  PolyProfits local server"
echo "  ------------------------"
echo "  Open in your browser:  http://localhost:3000"
echo "  Stop the server:       Ctrl+C"
echo ""
python3 -m http.server 3000
