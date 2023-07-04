import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/navigation';
import HomePage from './components/homepage';
import './App.css';

const App = () => (
  <div className="appHolder">
    <Navigation />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  </div>
);

export default App;
