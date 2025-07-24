import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Home from './components/Home';
import FinalReport from './components/FinalReport';
import AIAssistant from './components/AIAssistant';
import AutomatedIrrigation from './components/AutomatedIrrigation';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App pt-5">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<FinalReport />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/automated-irrigation" element={<AutomatedIrrigation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;