import React from 'react';
import Header from './partials/Header.jsx';
import Footer from './partials/Footer.jsx';
import Hero from './partials/Hero.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main-content" className="mt-20 p-4">
        <h1 className="text-4xl">Welcome to the New App</h1>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </>
  );
}

export default App;