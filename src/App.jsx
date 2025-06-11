import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deals from './components/Deals/Deals';
import Outdoor from './components/Outdoor/Outdoor';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Outdoor />
    </div>
  )
}

export default App
