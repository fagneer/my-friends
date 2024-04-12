import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Moon from './pages/Moon';
import Sun from './pages/Sun';
import Earth from './pages/Earth';
import Wind from './pages/Wind';
import Fire from './pages/Fire';
import Light from './pages/Light';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/sun" element={<Sun />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/light" element={<Light />} />
      </Routes>
    </Router>
  );
}

export default App;