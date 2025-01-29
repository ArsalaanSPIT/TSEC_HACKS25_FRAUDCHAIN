import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import Homepage from './pages/Homepage';



function App() {
  return (
    <BrowserRouter>
      <Routes><Route path='/' element={<Homepage></Homepage>}></Route></Routes>
    </BrowserRouter>
  );
}

export default App;
