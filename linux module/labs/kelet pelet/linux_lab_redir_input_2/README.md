# Linux Lab - Input Redirection with < (Part 2)

## Theme: "Input Redirection in Practice"

---

## Prerequisites

**Part 1 must be completed before starting this lab.**

This lab builds directly on the concepts introduced in Part 1. You should already be comfortable with:
- The basic syntax of input redirection: `command < file`
- The difference between `<` (input) and `>` (output) redirection
- Using `cat`, `wc`, and simple pipelines

---

## What You Will Practice

In Part 2, you will apply input redirection to realistic data processing scenarios:

1. **Process CSV files** using `cut` with `<` to extract specific columns
2. **Count words, lines, and characters** in documents using `wc` and `<`
3. **Sort and rank data** using `sort -n` and `sort -rn` with input redirection
4. **Perform case conversion** combining `tr` with `<` and `>`
5. **Remove duplicates** using `sort | uniq` pipelines fed by `<`
6. **Build pipelines** that combine `<` with `|` for multi-step processing
7. **Filter and count users** by status using `grep` with `<`

---

## Lab Structure

```
linux_lab_redir_input_2/
├── README.md               (this file)
├── start_here.txt          (begin here)
├── clues/
│   ├── level1/
│   │   ├── clue1.txt       (Simulating Message Input)
│   │   ├── clue2.txt       (Process a CSV)
│   │   └── clue3.txt       (Count Words in a Document)
│   ├── level2/
│   │   ├── clue1.txt       (Sort and Save: Ranking Scores)
│   │   ├── clue2.txt       (Case Conversion)
│   │   └── clue3.txt       (Remove Duplicates)
│   └── level3/
│       ├── clue1.txt       (Pipeline: Sort, Unique, Count)
│       ├── clue2.txt       (Filter and Count: Active Users)
│       └── clue3.txt       (Final Challenge: Data Processing Pipeline)
├── data/
│   ├── message.txt
│   ├── employees.csv
│   ├── document.txt
│   ├── scores.txt
│   ├── mixed_case.txt
│   ├── duplicates.txt
│   ├── names.txt
│   ├── users.txt
│   └── raw_report.txt
└── .answers/
    └── solutions.txt       (instructor reference)
```

---

## Learning Objectives

By the end of this lab you will be able to:

- Use `<` to feed any file into any command that reads from stdin
- Combine `<` on the left side of a pipeline with `|` and `>` on the right
- Apply `cut`, `sort`, `uniq`, `tr`, `grep`, and `wc` with input redirection
- Write output from pipelines to files using `>`
- Compute counts and differences using command substitution `$(...)`
- Understand why `uniq` requires sorted input
- Build a multi-step report generation pipeline from scratch

---

## How to Start

```bash
cat start_here.txt
```

---

## Answers File

Throughout the lab you will be asked to record your answers:

```bash
echo "your answer here" >> ../../my_answers.txt
```

Make sure you are in the correct working directory when running exercise commands.
