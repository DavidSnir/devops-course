#!/bin/bash
backup_exist=ls /tmp/backup_$(date +%Y-%m-%d).tar.gz 2>/dev/null
if [ -f "$backup_exist" ]; then
  echo "Backup already exists: $backup_exist"
else
  read -p "No backup found for today. Do you want to create one? (y/n): " choice
fi
