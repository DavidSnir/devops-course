#!/bin/bash
read -p "first number " n1
read -p "second number " n2
if [ $n1 -eq $n2 ]; then
  echo "The numbers are equal."
elif [ $n1 -gt $n2 ]; then
  echo "The first number is greater than the second number."
else
  echo "The second number is greater than the first number."
fi