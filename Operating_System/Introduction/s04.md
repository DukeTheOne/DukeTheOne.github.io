---
title : Introduction-1.4
description : chapter 1.4 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.4 - Operating System Operations
> This section explains how OS actually operates at runtime, executes concurrently, switching between user/kernel mode.

### Multiprogramming & Multitasking

- **Multiprogramming** : Multiple processes are kept in memory. The OS switches between jobs efficiently, **increasing CPU utilization**.
- **Multitasking** (Time Sharing) : CPU switches between rocesses so quickly that each user feels like they have their own machine, **increasing interactivity**.

### Dual-Mode Operation

> We need dual-mode to protect the system. The user programs must never be able to change interrupt tables,
> access I/O directly, modify page tables, disable interrupts, execute privileged instructions.

- User mode -> restricted, cannot execute privileged instructions.
- Kernel mode -> full access to hardware and memory.

Mode bit is the key hardware support. The system starts in kernel mode. 
Before running a user process, OS sets mode bit = user. 
When an interrupt, trap, or system call occurs, CPU automatically switches to kernel mode and jump to OS code. 
On return, CPU switches back to user mode.

### System Call and Traps

- **System Call** : A request from a user program to the OS. For examples: open() to open a file, fork() to dulplicate a process.

> System call -> Trap -> Kernel mode -> System-call handler.

When a program calls a system call, it will trigger a **trap**. Processor then switches to kernel mode, and transfers the control to OS system-call handler.

### I/O Protection

A user process cannot directly manipulate I/O devices. 
All I/O is done through system calls, 
in that way OS validates access and ensures devices and storage are not corrupted.

### Timer and CPU Protection

To prevent a process from running forever, a hardware timer interrupts the CPU periodically. 
OS can regain control and scheduler decides which process run next.

---

### Extra Points

#### User mode cannot access hardware

> All low-level hardware operations must go through OS.


#### Kernel mode does NOT mean a different process

> The same process is running, just in a different privilege level to execute privileged instructions.

---
