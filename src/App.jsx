 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;