#!/bin/bash
# This script logs 5 system events to system_events.txt
# BUG: It uses > for every line, so only the last line survives

(echo "EVENT 1: Script started at $(date)";
echo "EVENT 2: User is $(whoami)";
echo "EVENT 3: Running on host $(hostname)";
echo "EVENT 4: Current directory is $(pwd)";
echo "EVENT 5: Script finished at $(date)") > system_events.txt

echo ""
echo "Done! Check system_events.txt"
