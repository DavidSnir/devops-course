#!/bin/bash

#1
# echo I am $0

#2
# echo Total users on system: $(cat /etc/passwd | wc -l)

#3
# echo os: $(cat /etc/os)

#4
# echo system ha been running for: $(uptime)

#5
# echo active processes: $(ps aux | wc -l)

#6
# echo largest file $(du -sh /tmp/* 2> /dev/null | sort -rh | head -1)

#7
# echo username extracted: $(pwd | cut -d/ -f3)

#9
# count=$(grep -oi "the" /tmp/note.txt | wc -l)
# echo the word the appeared $count times

#10
