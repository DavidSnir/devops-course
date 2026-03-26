#!/bin/bash

# COUNTER=1
# while [ $COUNTER -le 5 ]; do
#     echo $COUNTER
#     COUNTER=$((COUNTER+1))
# done

#2
# COUNTER=1
# while [ $COUNTER -le 5 ]; do
#     echo Iteration number: $COUNTER
#     COUNTER=$((COUNTER+1))
# done

#3
# COUNTER=1
# while [ $COUNTER -le 10 ]; do
#     echo $COUNTER
#     COUNTER=$((COUNTER+1))
# done

#4

# COUNTER=1
# while [ $COUNTER -le 10 ]; do
#     if [ $((COUNTER % 2)) -eq 0 ]; then
#         echo $COUNTER
#     fi
#     COUNTER=$((COUNTER+1))
# done

# 5
# COUNTER=5
# while [ $COUNTER -ge 1 ]; do
#     echo $COUNTER
#     COUNTER=$((COUNTER-1))
# done

#6
# COUNTER=1
# while [ $COUNTER -le 5 ]; do
#     echo Hello
#     COUNTER=$((COUNTER+1))
# done

#7
# while read -r line; do
#     echo $line
# done < names.txt

#8
# COUNTER=$(cat /etc/passwd | wc -l|xargs)
# while [ $COUNTER -ge 1 ]; do
#     sed -n "${COUNTER}p" /etc/passwd
#     COUNTER=$((COUNTER-1))
# done

#9
# COUNTER=1
# while [ $COUNTER -le 10 ]; do
#     if [ $COUNTER -eq 6 ]; then
#         break
#     fi
#     echo $COUNTER
#     COUNTER=$((COUNTER+1))
# done

#10 
# ANSWER="no"
# while [ $ANSWER != "yes" ]; do 
#     read -p "yes or no?: " ANSWER
# done

#11
# SUM=0
# COUNTER=1
# while [ $COUNTER -le 5 ]; do
#     SUM=$((SUM+COUNTER))
#     COUNTER=$((COUNTER+1))
# done
# echo $SUM

#12
COUNTER=$(ls | wc -l | xargs)
while [ $COUNTER -ge 1 ]; do
    ls | sed -n "${COUNTER}p"
    COUNTER=$((COUNTER-1))
done


