import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deals from './components/Deals/Deals';
import Outdoor from './components/Outdoor/Outdoor';
import ConsumerSection from './components/ConsumerSection/ConsumerSection';
import Suppliers from './components/Suppliers/Suppliers';
import RecommendedItems from './components/RecommendedItems/RecommendedItems';
import ExtraServices from './components/ExtraServices/ExtraServices';
import Region from './components/Region/Region';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import LastLine from './components/LastLine/LastLine';
import ProductCart from './components/ProductCart/ProductCart';
import { CartPage } from './components/CartPage/CartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Deals />
              <Outdoor />
              <ConsumerSection />
              <Suppliers />
              <RecommendedItems />
              <ExtraServices />
              <Region />
              <Subscribe />
              <Footer />
              <LastLine />
            </>
          }
        />

        <Route 
          path="/product/:id" 
          element={<ProductCart cart={cart} setCart={setCart} />} 
        />

        <Route 
          path="/cart" 
          element={<CartPage cart={cart} setCart={setCart} />} 
        />
      </Routes>
    </div>
  );
};

export default App;
