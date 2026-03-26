#!/bin/bash
read -p "number 1 " n1
read -p "number 2 " n2
read -p "operation " op
if [ "$op" = "+" ]; then
  echo "The result is: $((n1 + n2))"
elif [ "$op" = "-" ]; then
  echo "The result is: $((n1 - n2))"
elif [ "$op" = "*" ]; then
  echo "The result is: $((n1 * n2))"
elif [ "$op" = "/" ]; then
  if [ $n2 -ne 0 ]; then
    echo "The result is: $((n1 / n2))"
  else
    echo "Error: Division by zero is not allowed."
  fi
else
  echo "Invalid operation. Please use +, -, *, or /."
fi