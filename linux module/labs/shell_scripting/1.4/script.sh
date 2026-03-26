#!/bin/bash

#1
# echo "today is $(date)"

#2
# echo "current user $(whoami)"

#3
# echo "dir $(pwd)"

#4
# echo "number of files $(ls -l | wc -l)"

#5
# echo shell $SHELL

#6
# mkdir "backup-$(date '+%y-%m-%d')"

#7
# for file in ./*; do
#     echo $file
# done

#8
# echo Current time: $(date '+%H:%M:%S')

#9
# filecount=$(ls -l ./ | wc -l | xargs)
# echo "there are $filecount files"

#10
# echo "Kernel version: $(uname -r)"

#11
# echo "Number of users: $(cat /etc/passwd | wc -l | xargs)"

#12
# echo directory size: $(du -sh)

#13
# touch "file-$(date '+%H-%M').txt"

# 14
# if [ $(ls -l|wc -l|xargs) -gt 5 ]; then
#     echo there are more than 5 files
# else
#     echo there are less than 5 files
# fi

# 15
echo User $(whoami) is in directory $(pwd)