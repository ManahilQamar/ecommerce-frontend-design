// src/App.js
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
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
import ProductCard from "./components/ProductCard/ProductCard";
import SearchResults from './components/SearchResults/SearchResults';
import { CartPage } from './components/CartPage/CartPage';
import { products } from './data/products';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cart={cart} setCart={setCart} />
      
      <main className="flex-grow">
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
            element={<ProductCard cart={cart} setCart={setCart} products={products} />} 
          />
          
          <Route 
            path="/cart" 
            element={<CartPage cart={cart} setCart={setCart} />} 
          />
          
          <Route 
            path="/search" 
            element={<SearchResults products={products} />} 
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;