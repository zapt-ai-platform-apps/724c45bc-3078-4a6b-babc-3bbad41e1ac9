import React from 'react';

export default function Features() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Features</h1>
      <p className="mb-6">
        Here you can describe the different features of the cloned site.
      </p>
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