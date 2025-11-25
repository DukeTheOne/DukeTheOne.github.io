---
title : Introduction-1.1
description : chapter 1.1 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.1 - What Operating System Do?

> Operating system manages hardware and provides services for applications.

### What a Operating System is?

> The operating system is the one program running at all times on the computer.
> It is a resource manager that allocates the CPU, Memory, and I/O devices,
> while providing an easier interface and abstractions for user programs.
> It acts as an intermediary between hardware and applications.

### User View

> OS hides hardware complexity and provides user-friendly abstractions. Such as..
- **API/system calls** -> applications don't have to handle hardware directly.
- **User interface** -> command line, GUI, touch screen.
- **Abstructions** -> file system, VM, virtual memory, etc.

### System View

> OS manages all hardware resources and ensures they are used efficiently and fairly.
- **CPU management** -> process scheduling, context switching.
- **Memory management** -> allocating memory, handling paging, swapping.
- **File system management** -> managing files and directories, ensuring data consistency.
- **Device management** -> managing I/O devices, using device drivers, buffering, caching, spooling.
- **Secutity & Protection** -> controlling access to resources.

---

### Extra Points

#### Kernel vs OS

> Kernel is the core part of OS, including scheduling, memory management, system calls... a bridge between hardware and software.
> OS is the complete software package, an entire environment that includes kernel, UI, system libraries, and utilities.

#### Does OS control hardware directly?

> No. OS uses device drivers to communicate with specific devices.
> Through this abstraction, applications can request hardware services without knowing the device details.
---
