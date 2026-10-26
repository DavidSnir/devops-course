#!/bin/bash
date=$(date +"%Y-%m-%d %H:%M:%S")
user=$(whoami)
echo "$date - script executed by $user" >> /tmp/activity.log
cat /tmp/activity.log