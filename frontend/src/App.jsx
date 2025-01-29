import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ConnectWallet from '';
function App() {
  return (
    <BrowserRouter>
      <Routes><Route path='/' element={<ConnectWallet></ConnectWallet>}></Route></Routes>
    </BrowserRouter>
  );
}

export default App;
