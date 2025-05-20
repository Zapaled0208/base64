import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const handleEncode = () => {
    try {
      const base64 = btoa(input);
      setEncoded(base64);
      setDecoded(atob(base64)); // auto show decoded
    } catch {
      setEncoded('Encoding failed.');
      setDecoded('');
    }
  };

  const handleDecode = () => {
    try {
      const decodedText = atob(input);
      setDecoded(decodedText);
      setEncoded(btoa(decodedText)); // auto show encoded
    } catch {
      setDecoded('Invalid Base64 input.');
      setEncoded('');
    }
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h2>Base64 Encoder/Decoder</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter text or Base64..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br /><br />
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode} style={{ marginLeft: '10px' }}>Decode</button>

        {encoded && (
          <>
            <h4>Encoded Output:</h4>
            <code>{encoded}</code>
          </>
        )}

        {decoded && (
          <>
            <h4>Decoded Output:</h4>
            <code>{decoded}</code>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
