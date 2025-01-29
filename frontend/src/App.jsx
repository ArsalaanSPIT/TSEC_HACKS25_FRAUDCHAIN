import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path='/' element={<></>}></Route> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
