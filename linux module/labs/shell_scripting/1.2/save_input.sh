#!/bin/bash
read -p "Enter a note: " note
echo "$(date '+[%Y-%m-%d %H:%M:%S]') $note" >> /tmp/notes.txt
cat /tmp/notes.txt