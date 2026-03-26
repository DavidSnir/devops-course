#!/bin/bash
leap_year(){
    if (( $1 % 400 == 0 ));then
        echo "Leap year"
        return 0
    elif (( $1 % 100 == 0 )) ;then
        echo "Not leap year"
        return 1
    elif (( $1 % 4 == 0 ));then
        echo "Leap year"
        return 0
    else
        echo "Not leap year"
        return 1
    fi
}
leap_year 2024
leap_year 2023
leap_year 2000
leap_year 1900