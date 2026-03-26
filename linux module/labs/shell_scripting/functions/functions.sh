#!/bin/bash

greet (){
    local name="Hello"
    echo "$name $1"
    echo "you are $2"
}

greet "david" "22"