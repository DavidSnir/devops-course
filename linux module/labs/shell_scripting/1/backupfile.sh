#!/bin/bash
cp /tmp/note.txt /tmp/note_backup_$(date +%Y%m%d%H%M%S).txt
echo "Backup created: /tmp/note_backup_$(date +%Y%m%d%)"