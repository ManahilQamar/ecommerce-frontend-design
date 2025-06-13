import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deals from './components/Deals/Deals';
import Outdoor from './components/Outdoor/Outdoor';
import Consumer from './components/consumer/consumer';
import Suppliers from './components/Suppliers/Suppliers';
import RecommendedItems from './components/RecommendedItems/RecommendedItems';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Outdoor />
      <Consumer />
      <Suppliers />
      <RecommendedItems />
    </div>
  )
}

export default App
