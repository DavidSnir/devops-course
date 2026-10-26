#!/bin/bash
CORRECT_USERNAME="admin"
CORRECT_PASSWORD="admin"
read -p "Username: " username
read -sp "Password: " password
if [ "$username" = "$CORRECT_USERNAME" ] && [ "$password" = "$CORRECT_PASSWORD" ]; then
  echo "Login successful!"
else
  echo "Login failed. Please check your username and password."
fi