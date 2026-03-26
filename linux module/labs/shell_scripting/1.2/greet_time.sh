#!/bin/bash
read -p "What is your name? " name
date=$(date +"%H")
if [ $date -lt 12 ]; then
  echo "Good morning, $name!"
elif [ $date -lt 18 ]; then
  echo "Good afternoon, $name!"
else
  echo "Good evening, $name!"
fi