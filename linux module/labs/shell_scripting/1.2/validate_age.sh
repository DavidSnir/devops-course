#!/bin/bash
read -p "What is your age? " age
if [ $age -lt 0 ] || [ $age -gt 120 ]; then
  echo "Invalid age. Please enter a valid age."
else
  echo "You are $age years old."
fi