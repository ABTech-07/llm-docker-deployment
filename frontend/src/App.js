import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/generate/', null, {

        params: { prompt }
      });
      setResult(response.data.generated_text);
    } catch (error) {
      console.error(error);
      setResult("Error calling the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🧠 LLM Text Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        cols={60}
        placeholder="Type your prompt here..."
      />
      <br />
      <button onClick={generateText} disabled={loading}>
        {loading ? "Generating..." : "Generate Text"}
      </button>
      <div className="result">
        <h3>Generated Output:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
