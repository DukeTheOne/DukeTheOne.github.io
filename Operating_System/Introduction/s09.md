---
title : Introduction-1.9
description : chapter 1.9 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.9 - Kernel Data Structures

> This topic highlights the most common data structures used inside modern kernels.

### Array, Stack, and Queue

- Ready queue -> list of processes waiting for CPU.
- Kernel mode stacks -> store function calls during system call.

### Tree

- File system directory tree.
- Virtual memory tree (Linux uses red-black trees to track memory areas).
- Scheduling tree.

### Hash Table

- Open file table.
- Process table.
- Page cache.
- Network routing table entries.

### Bitmap (or Bit Vector, it is an array of 0/1)

- Free/used blocks on disk, memory frames, or objects (usually 0 = free; 1 = allocated).

### Linked List

- PCB lists.
- List of free memory blocks.

---

### Extra Points

#### Not always BST

> Many OSes use red-black tree for memory management and process scheduling, B-tree for file system, multi-level tree structure for page table. 

---
