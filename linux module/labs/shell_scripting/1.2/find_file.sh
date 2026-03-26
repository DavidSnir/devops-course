#!/bin/bash
read -p "Enter the filename to search for: " filename
if [ -f "/tmp/$filename" ]; then
  echo "File found: $filename"
else
  echo "File not found: $filename"
fi
