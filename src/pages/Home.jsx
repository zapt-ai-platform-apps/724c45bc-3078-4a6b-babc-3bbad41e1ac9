import React from 'react';

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">Welcome to the Home page! This is the main landing area of our cloned app.</p>
      <p className="mb-4 text-center">Feel free to explore the navigation links to see various sections.</p>
      <div className="text-sm mt-8">
        <span>Made on </span>
        <a
          href="https://www.zapt.ai"
          className="underline text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          ZAPT
        </a>
      </div>
    </div>
  );
}