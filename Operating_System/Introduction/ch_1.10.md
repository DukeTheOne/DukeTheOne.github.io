---
title : Introduction-1.10
description : chapter 1.10 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.10 - Computing Environments

> Modern operating systems must support many different environments.

### Traditional Computing

A single computer serves one user at a time. Personal computer is still widely used today.
Only one OS instance is needed, focusing on single-user and direct interaction (keyboard, mouse, monitor).

### Mobile Computing

Smartphones and tablets are in our daily life. 
On mobile environment, resources are limited comparing to PC as well as power. 
Touch-screen interfaces are commonly used today.

### Client-Server Computing

Clients request services, and servers provide services. For example, web servers, database servers, file servers.

### Peer-to-Peer System

In P2P, clients are also servers. This type of system has high scalablity, and is used for file sharing, blockchain networks, gaming.

### Cloud Computing

Resources are delivered as services over the Internet. This concept is extremely important in modern OS design. 

- IaaS (infrastructure as a service) : Virtual machines, storage.
- PaaS (platform as a service) : Run apps without managing servers.
- SaaS (software as a service) : applications delivered over the web.

### Real-Time Embedded System

OS designed to respond to events within strict timing limits. 
Embedded systems are typically single-purpose, with limited memory/CPU, and used in Iot, vehicles, appliances.

- **Hard real-time** : Missing a deadline will cause the system failure.
- **Soft real-time** : Occasional deadline missing is acceptable.

---

### Extra Points

#### Cloud computing != Virtualization

> Cloud is the service model, while the virtualization is a technology.

#### Hard real-time != fast

> Hard real-time requires predictable and guarantee to meet deadline.
> It can be slow, but must be on time.

---
