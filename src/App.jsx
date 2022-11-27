import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Router, Routes } from 'react-router-dom';
import Login from './login/Login';

function App() {
  <Routes>
    <Router path="/login" element={<Login />} />
  </Routes>;

  return <div className="App">login</div>;
}

export default App;
