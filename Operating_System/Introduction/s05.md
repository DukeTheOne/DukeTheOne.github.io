---
title : Introduction-1.5
description : chapter 1.5 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.5 - Resource Management

> Every program needs CPU time, memory, files, and I/O devices.
> OS makes sure these resources are efficiently used, 
> shared fairly, protected from interference, and allocated safely.

### Process Management

- Creating and deleting both user and system processes.
- Scheduling processes and threads on the CPUs.
- Suspending and resuming processes.
- Providing mechanisms for process synchronization & communication.

### Memory Management

- Allocation & deallocation.
- Keeping track of used/free memory.
- Virtual memory management.
- Memory protection.

### Storage Management
> File system, mass-storage, cache management.

- File creation/deletion.
- Directory management.
- Disk space allocation.
- Caching and buffering I/O.
- Data consistency.

### I/O System Management

- Using device drivers.
- Queuing device requests.
- Interrupt handling for devices.
- Buffering, spooling, caching.

---

### Extra Points

#### Memory vs Storage

- **Memory** (RAM) is volatile and managed per-process.
- **Storage** (SSD/HDD) is persistent and managed as a file system.

#### Resource management is NOT only allocation

> It also includes protection, isolation, scheduling, accounting (tracking usage).

---
