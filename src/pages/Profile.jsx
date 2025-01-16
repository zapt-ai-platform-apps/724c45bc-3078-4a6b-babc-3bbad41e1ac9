import React, { useState } from 'react';
import * as Sentry from "@sentry/browser";

export default function Profile() {
  const [name, setName] = useState('');

  async function handleSave() {
    try {
      console.log('Profile: Attempting to save user name');
      // Placeholder for saving logic
      // Potentially send to backend or state management
      alert(`Profile saved for ${name}`);
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex flex-col gap-4 mb-6">
        <label htmlFor="profileName" className="font-semibold">
          Enter Name:
        </label>
        <input
          id="profileName"
          type="text"
          className="border-gray-300 border px-2 py-1 box-border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSave}
          disabled={!name}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-300"
        >
          Save
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