# 🧠 LLM Text Generator

A full-stack text generation application using HuggingFace Transformers. Built with **React** (frontend), **FastAPI** (backend), and containerized using **Docker**. This app allows users to input a text prompt and receive generated output from a lightweight LLM.

---

## 🚀 Features

- React-based UI for clean input/output experience
- FastAPI backend serving HuggingFace's `distilgpt2` text-generation model
- Dockerized environment with frontend and backend containers
- CORS enabled for local communication
- Easy to extend or deploy

---

## 🛠️ Local Development Setup

### Prerequisites

- Docker
- Docker Compose

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/ABTech-07/llm-docker-deployment.git
cd llm-docker-deployment

# 2. Build and run the containers
docker-compose up --build

## 🌐 Access the App

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API Docs (FastAPI Swagger UI):** [http://localhost:8000/docs](http://localhost:8000/docs)

