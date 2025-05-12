from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.model import generate_text

app = FastAPI()

# Enable CORS so React frontend can call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Only allow frontend dev origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"message": "LLM API is running"}

@app.post("/generate/")
def generate(prompt: str):
    response = generate_text(prompt)
    return {"generated_text": response}
