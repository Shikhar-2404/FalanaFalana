import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
debugger
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const lowercaseMessage = message.toLowerCase();
debugger
    try {
      const response = await fetch('/api/process-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: lowercaseMessage }),
      });

      const data = await response.json();

      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>Send</button>
      <p style={{ color: 'black' }}>{response}</p>
    </div>
  );
}

export default App;
