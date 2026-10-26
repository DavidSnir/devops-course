#!/bin/bash
read -p "name " n1

if [ -z "$n1" ]; then
  echo "The name is empty."
else
  echo "The name is: $n1"
fi
