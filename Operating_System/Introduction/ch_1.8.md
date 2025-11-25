---
title : Introduction-1.8
description : chapter 1.8 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.8 - Distrubted System

> A distributed system is a collection of independent, networked computers that appear to the user as a single coherent system.

### What is a Distributed system?

A distributed system consists of multiple computers connected via a network. 
The components share resources, work coordinately, offer services to users and applications.
For example, cloud computing, web servers, distributed databases.

- Computation speed-up -> Parallel execution of tasks across machines.
- Scalability -> Add more machines to the network to increase performance.
- Resource sharing -> Files, databases, compute power.
- Redundancy -> Independent failures tolerance (one node can crash while others continue).

### Types of Distributed Systems

- Distributed Computing Sytsem : Designed for parallel computation. For example, distributed HPC clusters.
- Distributed Information System : Giving consistent access to data. For example, distributed databases, file servers.
- Distributed Pervasive System : Integrating mobile or embedded devices. For example, IoT, smart home system.

### Distributed Operating System Concepts

- Communication between processes via message passing, remote procedure call (RPC).
- Coordination (lock, consensus).
- Scheduling across machines.
- Distributed file systems (NFS, AFS).
- Security across network.

---

### Extra Points

#### Message passing vs RPC

- Message passing : Network-based communication between processes on different computers. send(msg, destination), receive(msg).
- RPC : A program (client) makes a call to a procedure or function on a different machine (server) to request a service.

#### Challenges in distributed system

- Partial failures.
- Latency.
- There is no global clock.
- Synchronization issues.

---
