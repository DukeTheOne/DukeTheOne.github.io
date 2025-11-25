---
title : Introduction-1.7
description : chapter 1.7 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.7 - Virtualization

> Virtualization is a major modern OS concept. It allows one physical machine to behave like multiple independent computers.

### What is Virtualization?

Virtualization is the technique of abstracting physical hardware and presenting virtual versions of resources to users or programs.
This allows multiple OSes running concurrently on the same hardware. 
The resources include CPU, memory, storage, network, OS can be virtualized.

### Why Virtualization?

- Run multiple servers without buying multiple machines.
- VMs are isolated. One crash doesn't affect others.
- Malware analysis, unsafe code testing.
- Cloud computing, IaaS, virtual servers.

### Virtual Machine (VM)

A VM is a software simulation of a real computer.
It has virtual CPU, memory, disk, network interface.
And each VM runs its own OS, called the guest OS.
The layer that creates/manages VMs is the **virtual machine monitor** (VMM) or **hypervisor**.

### Types of Hypervisors

- Type 1 (bare-mental hypervisor) -> Runs directly on hardware. For example, VMware ESXi, Xen, Microsoft Hyper-V.
- Type 2 (hosted hypervisor) -> Runs on top of a host OS. For example, VMware Workstation, VirtualBox, Parallels.

---

### Extra Points

#### Virtualization requires hardware support

> Modern virtualization requires hardware assistance for tasks like memory protection, privileged instructions.

#### Virtualization vs Emulation

> Virtualization is for running compatible OSes on a single machine,
> while emulation is for running a system on a non-native one (like running ARM on x86). 

#### Emulator

> Emulator can simulate different CPU types. For example, BlueStacks can run Android environment on computer.

#### VM vs Container

> VMs virtualize hardware to run multiple operating systems on a single machine,
> while containers virtualize the operating system to run multiple applications on a single OS instance.
> So it is different levels of virtualization, hardware vs software level isolation.

---
