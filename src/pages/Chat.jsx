import React, { useState } from 'react';
import * as Sentry from "@sentry/browser";

export default function Chat() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    try {
      setLoading(true);
      console.log('Chat: Sending message');
      // Placeholder for sending message
      alert(`Message sent: ${message}`);
      setMessage('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      Sentry.captureException(error);
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Chat Section</h1>
      <div className="flex flex-col gap-4 items-center mb-6 w-full max-w-sm">
        <textarea
          className="border-gray-300 border p-2 box-border w-full"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          disabled={loading || !message}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-300"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      <p className="text-sm mt-8">
        <span>Made on </span>
        <a
          href="https://www.zapt.ai"
          className="underline text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          ZAPT
        </a>
      </p>
    </div>
  );
}