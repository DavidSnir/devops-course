#!/bin/bash

#1
# say_hello() {
#     echo "Hello function"
# }
# say_hello

#2
# print_line() {
#     echo "------------------------------"
# }
# for line in {1..3}; do
#     print_line
# done

#3
# show_date() {
#     echo date
# }

#4
# start_message() {
#     echo "-- Script started --"
# }

# end_message() {
#     echo "-- Script finished --"
# }
# start_message
# end_message

#5
# show_info() {
#     echo "David Snie"
#     echo date
#     echo pwd
# }

#6
# greet_by_name() {
#     echo "Hello, $1! Nice to meet you."
# }
# greet_by_name David

#7
# print_twice() {
#     echo $1
#     echo $1
# }
# print_twice david

#8
# describe_file() {
#     echo "Checking file: $1"
# }

#9
# add_numbers() {
#     echo $(($1 + $2))
# }
# add_numbers 4 5

#10
# full_greeting() {
#     echo "Good morning, $1 $2"
# }

#11
# repeat_word() {
#     for i in $(seq 1 $2); do
#         echo "$1"
#     done
# }
# repeat_word david 5

#12
# show_arg_count() {
#     echo "you put $# argument/s"
# }
# show_arg_count 12 

#13
# list_args() {
#     for arg in "$@"; do echo "- $arg"; done
# }
# list_args david is the king

#14
# create_greeting() {
#     echo "Good $2, $1"
# }

#15
# print_banner() {
#     echo "======================"
#     echo "      $1"
#     echo "======================"
# }
# print_banner Yep

#16
# count=1
# safe_counter() {
#     local count=10
#     echo $count
# }
# safe_counter
# echo $count

#17
# calculate_area() {
#     local area=$(($1*$2))
#     echo "Area: $area"
# }
# calculate_area 4 5

#18
# set_color(){
#     COLOR="Blue"
# }
# show_color(){
#     echo $COLOR
# }
# set_color
# show_color

#19
# temp_work(){
#     local tmp="temporary value"
#     echo $tmp
# }
# temp_work
# echo $tmp

#20
# build_message(){
#     local prefix="INFO"
#     local msg=$1
#     echo "[$prefix]" $1
# }
# build_message "Server started successfully"

#21
# check_even(){
#     if [ $(($1 % 2 == 0)) ];then
#         return 0
#     else
#         return 1
#     fi
# }
# check_even 4 && echo "Even Number" || echo "Odd number"

#22
# get_greeting(){
#     echo "Hello from a function!"
# }
# message=$(get_greeting)
# echo $message

#23
# file_exists() {
#     if [ -f "$1" ];then
#         return 0
#     else
#         return 1
#     fi
# }
# file_exists "functins.sh" && echo exists || echo not exists

#24
# get_file_count(){
#     local count=$(ls "$1" | wc -l)
#     echo "there are $count files in $1"
# }
# get_file_count "/etc"

#25
# validate_input(){
#     if [ -z $1 ]; then
#         echo "Error: no input provided"
#         return 1
#     else
#         echo "Input is valid"
#         return 0
#     fi
# }
# validate_input "hello"
# validate_input ""

#26
# to_uppercase(){
#     echo "$1" | tr '[a-z]' '[A-Z]'
# }
# to_uppercase "hello world"

#27
# divide(){
#     if [ $2 -eq 0 ]; then
#         echo "Error: cannot divide by zero"
#         return 1
#     else
#         echo $(($1 / $2))
#     fi
# }
# divide 3 0
# divide 1 3

#28
# backup_file(){
#     if [ -f $1 ]; then
#         local name="$1.bak"
#         echo "Backup created: $name"
#         return 0
#     else
#         echo "Error: $1 does not exist"
#         return 1
#     fi
# }
# backup_file $0

#29
# system_report(){    
#     column -t -s ',' << eof
#     ============,===========
#     Hostname, $(hostname)
#     User, $(whoami)
#     Date, $(date)
#     Uptime, $(uptime)
#     ============,===========
# eof
# }
# system_report

#30
get_username(){
    echo $(whoami)
}
get_homedir(){
    echo "/home/$(get_username)"
}
print_user_info(){
    column -s ',' -t <<eof
    User: , $(get_username)
    Home: , $(get_homedir)
eof
}
print_user_info
