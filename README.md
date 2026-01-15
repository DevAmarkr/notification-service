<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# Notification Service (Backend System Design Project)

A **production-grade, event-driven Notification Service** built using **NestJS** to demonstrate real-world backend engineering principles such as modular architecture, asynchronous processing, dependency injection, and extensibility.

This project is intentionally designed to go **beyond CRUD**, focusing on **system design, scalability, and clean architecture** — the kind of backend work expected in serious engineering teams.

---

## 🎯 Purpose of This Project

This service is built to:

- Strengthen **backend system design skills**
- Practice **clean, modular architecture** using NestJS
- Demonstrate **async processing with queues**
- Showcase how to design **extensible notification systems**
- Serve as a **portfolio-ready project** for backend interviews

---

## 🧠 What This Service Does

- Accepts notification requests via API  
- Processes notifications asynchronously  
- Supports multiple delivery channels (Email, SMS, Push)  
- Handles retries and failures gracefully  
- Designed for easy extension (new channels, providers, consumers)

---

## 🏗️ Architecture Overview


**Client / Producer Service**  
⬇️  
**Notification API (NestJS)**  
⬇️  
**Message Queue**  
⬇️  
**Notification Workers**  
⬇️  
**External Providers (Email / SMS / Push)**


Key architectural principles:

- **Separation of concerns**
- **Loose coupling via queues**
- **Dependency Injection**
- **Strategy pattern for channels**

---

## 🧩 Tech Stack

- **Backend Framework**: NestJS (Node.js + TypeScript)
- **Architecture**: Modular, event-driven
- **Queue (Planned)**: Redis + BullMQ
- **Database (Planned)**: PostgreSQL / MongoDB
- **Validation**: class-validator
- **Config Management**: @nestjs/config
- **Version Control**: Git

---

### Folder Responsibilities

- **notification/**  
  Core notification domain (API, services, channel strategies)

- **dto/**  
  Request/response contracts with validation rules

- **channels/**  
  Channel-specific implementations (Email, SMS, Push)

- **common/**  
  Shared utilities, base classes, guards, interceptors

- **config/**  
  Environment and application configuration

- **main.ts**  
  Application entry point

  
---

## 🚀 Roadmap

- [x] Project setup & architecture
- [ ] Notification API contracts
- [ ] Channel strategy implementation
- [ ] Async queue integration
- [ ] Retry & failure handling
- [ ] Persistence & delivery tracking
- [ ] Observability & logging

---

## 🔍 Why This Project Matters

Most demo projects stop at **sending an email**.  
This service focuses on **how backend systems actually work in production**:

- Decoupled services
- Asynchronous workflows
- Failure-tolerant design
- Clean boundaries and extensibility

---

## 👨‍💻 Author

Built as a **backend system design learning project** to develop strong fundamentals and showcase real-world engineering thinking.

