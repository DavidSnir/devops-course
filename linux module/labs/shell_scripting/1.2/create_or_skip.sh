#!/bin/bash
if [ -f "/tmp/myfile.txt" ]; then
  read -p "File already exists. Overwrite? (y/n): " choice
  if [ "$choice" = "y" ]; then
    rm /tmp/myfile.txt
    touch /tmp/myfile.txt
    echo "File overwritten: /tmp/myfile.txt"
  fi
else
  touch /tmp/myfile.txt
  echo "File created: /tmp/myfile.txt"
fi