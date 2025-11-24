---
title : Introduction-1.3
description : chapter 1.3 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.3 - Computer System Architecture

> This topic explains different types of computer and how CPUs interact with memory and each other.

### Single Process System

Traditional computers have **one main CPU** that executes general-purpose instructions (run user code).
They may have some special-purpose processors that runs a limited instruction set and do not run processes (like microprocessor in keyboard).

### Multiprocessor System

Multiple CPUs sharing the same physical memory. 
This increases throughput, and reliability. 
If one CPU fails, the system can continue.

- **Symmetric Multiprocessing (SMP)** : Each CPU runs the OS. They are peers and share the memory, thus Kernel must handle concurrency. Most modern systems use SMP.
- **Asymmetric Multiprocessing** : One master CPU controls the system, and others are assigned specific tasks. Rarely used today.

### Multicore System

A single chip contains multiple CPU cores.
- Faster than increasing clock speed.
- Lower power consumption.
- OS must support **parallelism** and **multithreading**.

### Clustered System

Multiple **independent** computers connected and working together.
This is used for high availability, load balancing, high-performance computing purpose.
And it requires network, shared storage, and a software to manage.

### UMA vs NUMA

- **UMA** (uniform memory access) : All CPUs access memory with same speed.
- **NUMA** (non-uniform memory access) : Memory divided into nodes. CPU access is faster to local memory, slower to remote.

---

### Extra Points

#### SMP != Multicore

SMP is a system design concept. Multicore is a hardware packaging. Most multicore system use SMP, but they are not the same.

#### NUMA != separate memory

Memory is still shared globally under NUMA. Just with different access time.

---
