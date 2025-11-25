---
title : Introduction-1.2
description : chapter 1.2 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.2 - Computer System Organization

> The modern computer system consists of several major parts : CPU, memory, I/O devices, OS, applications.

### CPU and Device Controllers

- The CPU and device controllers (disk controller, network controller, etc.) are connected through a system bus.
  Each device controller is responsible for managing operations, buffer's data, and communicating with the CPU.

### Memory

- Main memory stores instructions and data. The CPU can only execute instructions from main memory, not from disk.

### Storage Structure

> Register -> Cache -> Main memory (RAM) -> Secondary storage (SSD/HDD)
- The storage systems can be organized in a hierarchy, from the faster, closer to processer, to the slower, with larger space.

### I/O Structure

- **DMA (direct mamory access)** : The CPU sets up DMA controller, and the controller transfers data directly between device and memory.
  CPU is only interrupted once per chunk, not per byte. This greatly reduces CPU load, and commonly used for high-speed I/O (disk, network)
- **Polling** : CPU constantly checks device status. This is inefficient and wasting the CPU time
- **Interrupt-driven I/O** : The device notifies CPU when it is ready. This is efficient for multiple devices.

### Interrupts

> Interrupts are signals sent to CPU to indicate an event. It allows the system to be **responsive** and **support multitasking**.
- **Hardware interrupts** : Generated from devices. Like a keyboard press, disk I/O finished, etc.
- **Software interrupts** : Generated from programs. Like a system call, divide-by-zero error, etc.
> Hardware and Software interrupts are sometime specified as **Interrupt**(hardware) and **Trap**(software).

When the interrupt is generated, the CPU stops the current job, saves its state, and jumps to an interrupt handler.
After the interrupt is handled, CPU will restore its state, and continue the execution.

---

### Extra Points

#### Device Drivers vs Device Controllers
- **Device Driver** is a software which provides a standardized interface for OS to communicate with the controller.
- **Device Controller** is a hardware component which manages the physical I/O device and performs tasks like data buffering, error correction.

---
