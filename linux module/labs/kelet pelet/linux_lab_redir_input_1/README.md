# Linux Lab - Input Redirection with < (Part 1)
## Theme: "Feeding Files to Commands"

---

## Overview

This lab introduces **input redirection** using the `<` operator in Linux/Bash.
By default, commands read input from the keyboard (stdin). With `<`, you redirect
a file's content into a command's stdin — no keyboard needed.

---

## Learning Objectives

By the end of this lab you will be able to:

1. **Understand stdin** and where it comes from by default
2. **Use `<` to redirect file content as stdin** into commands
3. **Understand when `<` is needed** versus passing a filename as an argument
4. **Combine `<` with `>`** to perform file-to-file processing in a single command
5. **Use `<` with commands that ONLY read from stdin** (like `tr`, which has no filename argument)

---

## Why This Matters

Many Linux tools are designed to read from stdin. Some (like `tr`) accept *only* stdin
and will error if you try to pass a filename. Others (like `sort`, `wc`, `grep`) accept
either a filename argument *or* stdin. Understanding `<` gives you:

- A consistent, scriptable way to feed data to any command
- The ability to chain file processing without intermediate pipe steps
- Full control over where input comes from and where output goes

---

## Quick Reference

| Pattern | What it does |
|---|---|
| `command < file.txt` | Redirect file.txt as stdin to command |
| `command < input.txt > output.txt` | Read from input.txt, write to output.txt |
| `command < file.txt \| next_cmd` | Redirect file as stdin, pipe output onward |
| `wc -l < file.txt` | Count lines, print only the number (no filename) |
| `tr 'a-z' 'A-Z' < file.txt` | tr REQUIRES `<` — it has no filename argument |

---

## Lab Structure

```
linux_lab_redir_input_1/
├── README.md               ← You are here
├── start_here.txt          ← Start here for orientation
├── clues/
│   ├── level1/
│   │   ├── clue1.txt       ← L1-E1: What is stdin? Two ways to feed a command
│   │   ├── clue2.txt       ← L1-E2: Count lines with wc -l
│   │   └── clue3.txt       ← L1-E3: Sort a file using input redirection
│   ├── level2/
│   │   ├── clue1.txt       ← L2-E1: tr requires < (stdin-only command)
│   │   ├── clue2.txt       ← L2-E2: Combine < and > for file-to-file processing
│   │   └── clue3.txt       ← L2-E3: grep with input redirection
│   └── level3/
│       ├── clue1.txt       ← L3-E1: Transform and save with tr + < + >
│       ├── clue2.txt       ← L3-E2: Word frequency (preview of pipes)
│       └── clue3.txt       ← L3-E3: Final data processing challenge
├── data/
│   ├── words.txt           ← 25 tech words (some repeated)
│   ├── unsorted.txt        ← 15 unsorted words (mixed case)
│   ├── numbers.txt         ← 12 unsorted numbers
│   ├── lowercase.txt       ← 5 lines of lowercase text
│   ├── sentence.txt        ← One sentence (10 words)
│   ├── app_log.txt         ← 20-line application log
│   └── raw_data.txt        ← 20 username,status entries
└── .answers/
    └── solutions.txt       ← Instructor solutions (do not peek!)
```

---

## Exercise Summary

### Level 1 — stdin intro, wc, and sort basics
| Exercise | Title | Key Skill |
|---|---|---|
| L1-E1 | What is stdin? Two Ways to Feed a Command | `cat file` vs `cat < file` |
| L1-E2 | Count Lines: wc -l with and without < | Output format differences |
| L1-E3 | Sort a File Using Input Redirection | `sort`, `sort -r`, `sort -n` |

### Level 2 — tr, combining < and >, grep
| Exercise | Title | Key Skill |
|---|---|---|
| L2-E1 | tr Requires < — A Command That Only Reads stdin | Why `<` is mandatory for `tr` |
| L2-E2 | Combine < with >: Input from File, Output to File | Full file-to-file pipeline |
| L2-E3 | grep with Input Redirection | `grep -i`, `-c`, `-v` with `<` |

### Level 3 — Transform, word frequency, final challenge
| Exercise | Title | Key Skill |
|---|---|---|
| L3-E1 | Transform and Save: tr + < + > | Multi-step file transforms |
| L3-E2 | Word Frequency: Combining < with Pipes | `< file \| sort \| uniq -c` |
| L3-E3 | Final Challenge: Process raw_data.txt | Full data processing workflow |

---

## How to Start

```bash
cat start_here.txt
```

Then begin with:

```bash
cat clues/level1/clue1.txt
```

---

## Tips

- Run commands exactly as shown first, then experiment
- Write your answers using the `echo "answer" >> ../../my_answers.txt` pattern
- The `.answers/` directory contains instructor solutions — try on your own first!
- Estimated completion time: **60-75 minutes**
