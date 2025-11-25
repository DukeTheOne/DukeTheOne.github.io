---
title : Introduction-1.6
description : chapter 1.6 of the <Operating System Concepts>
tags : [os, notes, ]
---

# Introduction

---

## 1.6 - Security and Protection

> OS protects resources and secures the system from internal mistakes and external attacks.

### Protection

> Protection is to control access to resources inside the system.

- Isolation between processes.
- Valid and authorized access to CPU/memory/files/devices.
- Fault containment (one process crash doesn't break everything).

Common protection tools include privileged instructions, dual-mode, page tables, file permissions, ACLs (access control lists). 

### Security

> Security is to defend system from external threats or malicious attacks.

- Protecting system integrity, user data, and network communication.
- Threats include malware, social engineering, unauthorized access, network attacks.

### Degrees of Security

- User authentication : Passwards, biometrics, two-factor authentication.
- Access control -> What a user can access after logging in.
- Encryption -> Protecting data confidentiality.
- Audit/Logging -> Tracking access for later review.
- Defense against network threats -> Firewalls, IDS/IPS.

---

### Extra Points

#### Protection vs Security

- Protection controls how processes within a system use resources. Mostly internal.
- Security protects against external attackers, malicious users.

---
