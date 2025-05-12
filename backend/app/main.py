from fastapi import FastAPI
from app.model import generate_text

app = FastAPI()

@app.get("/")
def health_check():
    return {"message": "LLM API is running"}

@app.post("/generate/")
def generate(prompt: str):
    response = generate_text(prompt)
    return {"generated_text": response}
