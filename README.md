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

🌐 Access the App Locally
Frontend: http://localhost:3000
Backend API Docs: http://localhost:8000/docs

📌 Future Enhancements

Add loading spinner with streaming output
Switch to a more powerful model (e.g., GPT-2 or LLaMA)
Add advanced prompt controls (temperature, max tokens)
Deployment using CI/CD or serverless platforms

🤝 Contributions

Contributions, suggestions, and feedback are welcome! Feel free to fork this repo and submit pull requests.