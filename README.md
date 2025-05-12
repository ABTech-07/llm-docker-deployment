# 🧠 LLM Docker Deployment

This project demonstrates how to **deploy a lightweight Large Language Model (LLM)** using **FastAPI** and **Docker**. The LLM is wrapped in a REST API and runs inside a Docker container for easy portability and scalability.

---

## 📦 Tech Stack

- **Python 3.10**
- **FastAPI** – for the REST API
- **Hugging Face Transformers** – for model loading
- **Docker** – for containerization
- **Uvicorn** – for serving the API

---

## 🚀 Features

- Serve an LLM (DistilGPT2) via a `/generate/` endpoint
- REST API with Swagger docs at `/docs`
- Containerized for consistent deployment across systems
- Easily extendable to larger models or cloud/GPU deployment

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ABTech-07/llm-docker-deployment.git
cd llm-docker-deployment
