# Use the official Python base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy required files
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code into the container
COPY . .

# Expose port for FastAPI
EXPOSE 8000

# Run the API using uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
