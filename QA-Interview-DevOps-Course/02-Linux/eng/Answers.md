# Common Linux Interview Answers

1. The maximum filename length under Linux is 255 bytes.
2. The proc filesystem is a virtual filesystem that provides an interface to kernel data structures. It contains useful information about currently running processes and serves as a control and information center for the kernel.
3. LVM (Logical Volume Management) is a storage-management tool that provides flexibility in disk management, including online resizing, disk allocation, and mirroring. It is used to manage disk space dynamically without requiring system downtime.
4. A zombie process is a process that has finished executing but still appears in the process table. This happens when the parent process has not read the child process's exit status using the wait system call.
5. Swap space is disk space used as a substitute for physical memory (RAM) when RAM becomes full. It allows the system to continue running programs by moving less frequently used data from RAM to disk.
6. The three standard streams are standard input (stdin), standard output (stdout), and standard error (stderr).
7. SSH (Secure Shell) is a protocol used to connect securely to remote servers over encrypted channels. You can connect using an IP address or domain name and authenticate with a private key or password.
8. The grep command searches for character strings in specified files using patterns known as regular expressions.
9. systemd is the init system and service manager used by modern Linux distributions. Services are managed with systemctl commands such as start, stop, enable, and disable, which control the lifecycle of service units.
10. These are special permissions: SUID lets a file run with the owner's permissions; SGID lets it run with the group's permissions or makes new files inherit a directory's group; the sticky bit prevents users from deleting other users' files in shared directories such as /tmp.
11. Linux is an operating system based on the Linux kernel. It is open source, runs on many hardware platforms, and allows users to modify the source code.
12. The components include the Kernel, which interfaces between software and hardware; the Shell, which interfaces between the user and kernel; a GUI; System Utilities; and Application Programs.
13. The root user is the superuser or system administrator with unrestricted access to system resources and commands. It can perform administrative tasks such as installing software and managing accounts.
14. A symbolic link points to the path of another file, while a hard link points directly to the file's inode and shares the same underlying data.
15. LVM (Logical Volume Management) is a storage-management tool that allows flexible creation, resizing, and deletion of logical volumes. It can pool physical storage devices into groups and allocate logical units from them.
16. grep searches for patterns inside files or in the output of other commands and displays the matching lines.
17. Network bonding combines two or more network interfaces into one logical interface to improve performance, increase bandwidth, and provide redundancy.
18. The process states are commonly described as New/Ready, Running, Blocked/Waiting, Terminated, and Zombie, where a zombie process has exited but still has an entry in the process table.
19. A firewall monitors and controls incoming and outgoing network traffic according to predefined security rules, protecting the system from unauthorized access and threats.
20. init is the traditional system that runs startup scripts sequentially, while systemd is a modern system that supports parallel startup and advanced service management.
21. The kernel is the core component of the operating system. It provides basic services and mediates between user-space commands and hardware. Because the Linux kernel is distributed under the GPL, modifying it is legal subject to the license terms.
22. Linux is generally open source and free, while Unix systems are often proprietary and commercial. Linux commonly uses Bash and supports a broad range of hardware and filesystems, whereas Unix was originally developed for large servers and workstations.
23. The system consists of three main parts: 1. Kernel - manages hardware resources. 2. System Libraries - provide functions for accessing kernel features. 3. System Utilities - perform specific tasks.
24. LILO (Linux Loader) is a boot loader that loads the operating system into main memory. It resides in the MBR and enables booting, although it has limitations related to MBR handling on some systems.
25. Swap space is disk space allocated for Linux to temporarily hold memory pages when RAM is full. It is part of memory management and involves moving data between RAM and persistent storage.
26. The root account is the system administrator account with full control. It can create and maintain user accounts and assign different permissions to each account.
27. Several commands can be used: 1. `free -m`. 2. Read `/proc/meminfo`. 3. `vmstat -s`. 4. `top` for real-time monitoring. 5. `htop` for a more visual interface.
28. 1. Read: allows opening and reading a file or listing directory contents. 2. Write: allows modifying a file or adding/removing files in a directory. 3. Execute: allows running the file.
29. There are three modes: 1. Command Mode. 2. Insertion Mode. 3. Ex Mode.
30. Cron is intended for tasks scheduled with minute-level granularity and assumes the system is running continuously, making it suitable for servers. Anacron is intended for daily or weekly tasks and runs missed jobs after a system comes back online, making it useful for personal computers.
31. The main calls are `fork()` to create a process, `exec()` to run a program, `wait()` to wait for a child process, `exit()` to terminate a process, and `getpid()` to obtain the process ID.
32. grep, whose name is often expanded as Global Regular Expression Print, searches for patterns in text files and prints lines matching the specified regular expression.
33. Common commands include `ping` for connectivity, `ifconfig` or `ip` for interfaces, `netstat` or `ss` for connections and routing information, `traceroute` for packet paths, and `dig` or `nslookup` for DNS queries.
34. Linux is an operating system or kernel distributed under an open-source license. Its functionality is similar to Unix. The kernel is the core of the system and manages communication between hardware and software.
35. Unix originated as a proprietary system from Bell Labs, while Linux is a free and open-source system intended for broad use.
36. BASH stands for Bourne Again Shell. It is a replacement for the original Bourne Shell that combines its features with additional convenience functions. It is the default shell on many Linux systems.
37. Swap space is storage used to temporarily hold memory pages when RAM is full.
38. The root account is the system administrator account and grants full control over the system, including user creation and permission management.
39. You can use `cat /proc/meminfo` or dedicated memory-status commands.
40. Symbolic links are shortcut-like files that point to programs, files, or directories, allowing quick access without using the full path.
41. Use the `chmod` command with operators such as `+` or `-`, specify the target class (`u`, `g`, `o`, `a`), and specify the permission (`r`, `w`, `x`).
42. Hard links point directly to the same underlying file inode rather than to a pathname, so the link continues to work even if another filename for the file is moved or renamed.
43. Daemons are background services that wait for service requests and handle them without requiring an interactive controlling terminal.
44. Use the `kill` command with the process PID.
45. Use `du -sh folder_name`.
46. Use `free -m` for megabytes or `free -g` for gigabytes.
47. Use `find . -name "filename"`.
48. Use `uname -r` to check the kernel version. Distribution and operating-system details are available in `/etc/os-release`. This information is useful when troubleshooting compatibility and package issues.
49. Hidden files begin with a dot (`.`) and often contain application or user configuration. Display them with `ls -a`.
50. Instead of opening the entire file, use `less filename` for paged viewing, or `head` and `tail` for specific sections. This avoids performance issues with very large files or logs.
51. Use `tail -f filename` to follow real-time updates to a log file.
52. Use `grep` to find errors or patterns inside a file or log.
53. `df -h` shows filesystem usage, while `du -sh directory` shows the size of a directory. These commands are essential when diagnosing disk-space problems.
54. Start with `top`. It provides real-time visibility into CPU usage, memory usage, and processes consuming resources.
55. `kill PID` sends a normal termination signal, while `kill -9 PID` forces termination. Forced killing should be used only when necessary.
56. Check file permissions with `ls -l`, ownership with tools such as `chown`, and SELinux or AppArmor policies, which may block access even when traditional permissions appear correct.
57. Schedule recurring tasks with cron by editing the crontab. Define the execution time and command; common uses include backups, log cleanup, and maintenance.
58. LVM (Logical Volume Management) provides flexible disk management. It allows logical volumes to be resized with little or no downtime and simplifies storage expansion and snapshots.
59. SELinux enforces Mandatory Access Control policies. Check its status with `getenforce` or `sestatus`.
60. rsync transfers only changed data and supports compression and resuming interrupted transfers, making it faster and more efficient for backups and synchronization than scp in many cases.
61. Use a layered approach: verify network connectivity such as ping, routing, and firewall rules; check service health; inspect system resources such as CPU, memory, and disk; and review recent configuration changes.
62. Investigating a kernel panic includes collecting dumps with kdump, reviewing kernel logs and `dmesg`, and analyzing the dump with tools such as `crash` to identify hardware problems or driver bugs.
63. The administrator username is `root`, and its UID is `0`.
64. Use `ls -a`.
65. Use `rm -r directory_name`.
66. A hard link points to the file's inode, while a symbolic link is a separate file that points to another path. Deleting the original path can break a symbolic link, while the hard link continues to work as long as at least one hard link to the inode remains.
67. The sticky bit is a special permission commonly used on shared directories such as `/tmp`. It ensures that only the file owner, directory owner, or root can delete or rename files inside the directory.
68. It is a fork bomb: a function recursively invokes itself twice and runs copies in the background, rapidly exhausting process-table and system resources and potentially freezing the system.
69. The OOM killer is a Linux-kernel mechanism activated when the system runs critically low on memory. It selects a process to kill based on an OOM score influenced by memory usage and process-adjustment values.
70. Source IP address, destination IP address, source port, and destination port.
71. Virtual machines run a complete operating system on top of a hypervisor, while containers share the host kernel and isolate workloads mainly at the process and userspace level.
72. cgroups are a Linux mechanism for limiting, accounting for, and isolating resources such as CPU, memory, and I/O for groups of processes. They are a foundation of container technologies.
73. Linux is an open-source, Unix-like operating system whose kernel was created by Linus Torvalds in 1991. It supports authentication and access control, a broad application ecosystem, and extensive customization.
74. Linux architecture consists of four main components: the Kernel, the Shell, System Utilities, and Applications.
75. LILO stands for Linux Loader. It is a boot loader used to load the operating system into main memory.
76. BASH stands for Bourne Again Shell. It is a command-language interpreter used as the default shell in many Linux distributions and can execute commands from scripts.
77. Swap space is disk space used as an extension of RAM when physical memory fills up, allowing the system to move less-used memory pages out of RAM.
78. Unix is a family of systems that often includes proprietary commercial variants, while Linux is open source and generally free to use.
79. Linux supports many shells, including Bash, Zsh, Ksh, Csh, and Tcsh.
80. Process states include Ready, Running, Blocked or Waiting, Terminated, and Zombie, where a zombie process has exited but its process-table entry still exists.
81. Advantages include being free, publicly accessible, and modifiable. Disadvantages may include weaker compatibility with some hardware, a steeper learning curve in some cases, and lack of official vendor support for some projects.
82. There are three permission types: Read, Write, and Execute. They are assigned to three classes: User, Group, and Others.
83. Explain a structured problem-solving process that includes brainstorming, research, testing hypotheses, and validating solutions. The STAR method can be useful for presenting a past example.
84. The focus is on clearly explaining your personal workflow from requirements through implementation, testing, and deployment to both technical and non-technical stakeholders.
85. This evaluates technical skill and problem-solving process. Show how you investigated the issue, found the fix, validated it, and explain your reasoning.
86. The interviewer is evaluating your decision-making principles when multiple stakeholders are involved and when technology constraints must be balanced against business needs.
87. Use the opportunity to show what you learned from failure, how you handled it, and how you improved afterward.
88. Git Merge combines changes from one branch into another while preserving a branched commit history. Git Rebase rewrites history by replaying the current branch's commits on top of another branch, producing a more linear history.
89. Docker containers package applications with their dependencies, helping maintain consistency between development and production environments. They also support CI/CD by enabling fast, repeatable testing and deployment.
90. Common topics include the OSI model, TCP and UDP, routing, switching, IP addressing, and DNS.
91. The interview may cover Microsoft cloud services, resource management, cloud security and IAM, storage services, virtual machines, and App Services.
92. ITIL focuses on IT Service Management (ITSM), including service strategy, design, transition, operation, and continual service improvement.
93. Linux can be described as having four main layers: Hardware, the Kernel, the Shell, and Utilities or user-space programs.
94. Bash is the default shell in many distributions. Tcsh/Csh has C-like syntax and features such as command completion. Ksh is a powerful shell with strong scripting capabilities.
95. Use the `man` command followed by the command name, for example `man ls`. Manual pages typically include the name, synopsis, description, examples, and additional notes.
96. Use `top`, which displays real-time information such as PID, owner, CPU utilization, and memory utilization. Options include `top -u` for a user and `top -p` for a specific process.
97. The pipe operator (`|`) passes the output of one command as the input to another. For example: `ls -l | grep key`.
98. Permissions define who can access a file or directory (Owner, Group, Others) and what access is allowed (Read, Write, Execute). Change them with `chmod`.
99. A process is a running program. Each process has a unique PID and can create child processes using system calls such as `fork()` or `clone()`.
100. Regular expressions are patterns used to match strings. `*` means zero or more occurrences, `+` means one or more occurrences, and `?` means zero or one occurrence.
101. sed is a stream editor used to transform text, often based on regular expressions, for example `sed 's/pattern/replacement/'`.
102. A soft link, or symbolic link, points to a pathname and can cross filesystems. A hard link points to the same inode and must exist on the same filesystem.
103. The administrator username is `root`, and its UID is `0`.
104. Use `ls -a` to display all files, including hidden files whose names begin with a dot.
105. Use `rm -r directory_name` for recursive removal.
106. `tee` reads from standard input and writes both to standard output and to one or more files. `awk` is a pattern-oriented text-processing language used to filter, transform, and report on structured text.
107. Tunneling encapsulates traffic so data can be carried through another connection or network path. An HTTP proxy may be bypassed using techniques such as SSH tunneling or a VPN, where permitted by policy.
108. An IDS (Intrusion Detection System) detects and alerts on suspicious activity, while an IPS (Intrusion Prevention System) also takes active steps to block threats.
109. The `swappiness` parameter controls the kernel's tendency to move memory pages from RAM to swap. Lower values generally make the kernel less eager to swap.
110. Change TCP buffer settings through sysctl parameters such as `net.core.rmem_max`. Appropriate sizing depends on bandwidth and latency, commonly estimated using the bandwidth-delay product (BDP).
111. localhost is a hostname for the loopback interface, typically `127.0.0.1`. Ping may fail if the loopback interface is down, name resolution is misconfigured, or local firewall rules block it.
112. Commands include `netstat -tulpn`, `ss`, and `lsof -i`.
113. Use: `CREATE USER 'username'@'host' IDENTIFIED BY 'password';`
114. Git is a distributed version control system used to track changes in source code during software development.
115. Possible methods include invoking the program through the dynamic loader, for example `/lib/ld-linux.so.2 /bin/chmod +x /bin/chmod`, or restoring the correct permissions from a trusted source. The exact loader path depends on the system architecture.
116. Boot into single-user or recovery mode, or edit the kernel command line in GRUB and use an emergency shell such as `init=/bin/bash`, then reset the password according to the distribution's recovery procedure.
117. Use: `find testdir -name "*.pyc" -delete`.
