#!/bin/bash
echo  "Welcome to the File Manager!"
echo "Please choose an option:"
echo "1. show all files in temp"
echo "2. create file"
echo "3. delete file"
read -p "Choose between 3 options: " choice
if [ "$choice" -eq 1 ]; then
  echo "Files in /tmp:"
  ls -l /tmp
elif [ "$choice" -eq 2 ]; then
  read -p "Enter the filename to create: " filename
  touch "/tmp/$filename"
  echo "File created: /tmp/$filename"
elif [ "$choice" -eq 3 ]; then
  read -p "Enter the filename to delete: " filename
  if [ -f "/tmp/$filename" ]; then
    rm "/tmp/$filename"
    echo "File deleted: /tmp/$filename"
  else
    echo "File not found: /tmp/$filename"
  fi
else
  echo "Invalid option. Please choose between 1, 2, or 3."
fi