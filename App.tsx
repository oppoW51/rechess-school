import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Format from './components/Format';
import Features from './components/Features';
import Classes from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-gray-800 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoSection />
        <Format />
        <Features />
        <Classes />
      </main>
      <Footer />
    </div>
  );
};

export default App;