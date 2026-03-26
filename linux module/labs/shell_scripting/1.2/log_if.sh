#!/bin/bash
read -p "Message: " message
if echo "$message" | grep -qi "error"; then
  echo "$message" >> /tmp/info.log
  echo "Error message logged to /tmp/info.log"
else
  echo "No error detected in the message."
fi
