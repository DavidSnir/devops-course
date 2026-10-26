#!/bin/bash
tar -czf /tmp/lab_archive.tar.gz /tmp/note.txt /tmp/activity.log
echo "Created archive: /tmp/lab_archive.tar.gz"
du -sh /tmp/lab_archive.tar.gz