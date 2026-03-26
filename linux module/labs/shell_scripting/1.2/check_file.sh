#!/bin/bash
if [ -f /tmp/notes.txt ]; then
  echo "File exists: /tmp/notes.txt"
else
  echo "File does not exist: /tmp/notes.txt"
fi