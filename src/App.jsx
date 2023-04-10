import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
