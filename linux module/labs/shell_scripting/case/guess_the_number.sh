#!/bin/bash

SECRET=$(shuf -i 1-10 -n 1)

echo $SECRET
cat << EOF
=== Guess The Number ===
I picked a number between 1 and 10
========================
EOF

while true; do
    read -p "Enter your guess: " GUESS
           
    if [ $GUESS -gt $SECRET ]; then
        echo "Too high, try again..."
    elif [ $GUESS -lt $SECRET ]; then 
        echo "Too Low, try again..."
    else 
        echo "Great Job!"
        break
    fi
done