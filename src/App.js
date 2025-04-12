import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TranslationContainer from './components/TranslationContainer';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="main">
                <TranslationContainer />
                <FeatureGrid />
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
