import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ homeUrl } element={ <Home /> } />
        <Route path={ homeUrl + "/about" } element={ <About /> } />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
