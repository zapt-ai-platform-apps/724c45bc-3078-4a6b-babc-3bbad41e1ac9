import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-black bg-gray-50">
      <nav className="bg-gray-200 p-4 flex flex-row gap-6 justify-center">
        <Link to="/" className="text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
          Home
        </Link>
        <Link to="/features" className="text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
          Features
        </Link>
        <Link to="/profile" className="text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
          Profile
        </Link>
        <Link to="/chat" className="text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
          Chat
        </Link>
      </nav>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
    </div>
  );
}