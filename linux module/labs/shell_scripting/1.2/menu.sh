#!/bin/bash
echo "Choose an option:"
echo "1) show date"
echo "2) show usrname"
read -p "Enter your choice: " choice

if [ $choice -eq 1 ]; then
  date
elif [ $choice -eq 2 ]; then
  whoami
else
  echo "Invalid choice."
fi