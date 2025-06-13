import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deals from './components/Deals/Deals';
import Outdoor from './components/Outdoor/Outdoor';
import ConsumerSection from './components/ConsumerSection/ConsumerSection';
import Suppliers from './components/Suppliers/Suppliers';
import RecommendedItems from './components/RecommendedItems/RecommendedItems';
import ExtraServices from './components/ExtraServices/ExtraServices';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Outdoor />
      <ConsumerSection />
      <Suppliers />
      <RecommendedItems />
      <ExtraServices />
    </div>
  )
}

export default App
