import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import WhatWeDo from './components/WhatWeDo';
import OurMovies from './components/OurMovies';
import MeetTheTeam from './components/MeetTheTeam';
import InstagramHighlights from './components/InstagramHighlights';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={
        <>
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <WhatWeDo />
        <OurMovies />
        <MeetTheTeam />
        <InstagramHighlights />
        <Footer />
        </>
      } />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
  )
}

export default App
