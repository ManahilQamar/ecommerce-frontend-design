import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CombinedNavbar = ({ cart }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { 
      name: 'Profile', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      name: 'Messages', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    { 
      name: 'Orders', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      name: 'Cart', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setShowSearch(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total cart count
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav className={`bg-white shadow-md py-3 px-4 md:px-8 border-b border-gray-300 transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-3 text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div className="text-xl font-bold text-indigo-500 ml-2">Brand</div>
            </div>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full rounded-lg border-2 border-blue-600 pl-4 pr-10 py-2 
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          hover:shadow-md transition-all duration-300"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-r-md bg-indigo-600 text-white px-5 py-2 
                                hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Nav Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                {item.name === 'Cart' ? (
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="rounded-full hover:bg-gray-100 transition-colors relative"
                  >
                    {item.icon}
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                ) : (
                  <button className="rounded-full hover:bg-gray-100 transition-colors">
                    {item.icon}
                  </button>
                )}
                <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Icons - Only show Profile and Cart */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative mr-2"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
          
          </div>
        </div>

        {/* Mobile Search Field - Always visible below nav bar */}
        <div className="mt-3 md:hidden">
          <div className="relative flex">
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
           
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden bg-gray-50 rounded-lg py-4 px-2">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center group p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                  {item.name === 'Cart' ? (
                    <button
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="p-2"
                    >
                      {item.icon}
                      {cartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                          {cartCount}
                        </span>
                      )}
                    </button>
                  ) : (
                    <button className="p-2">
                      {item.icon}
                    </button>
                  )}
                  <span className="text-sm mt-1 text-gray-600 group-hover:text-indigo-600">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-[999]"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Cart Sidebar - Responsive */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-full md:w-80 bg-white shadow-lg z-[1000] p-5 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500 text-2xl">
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <button 
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                onClick={() => {
                  setIsCartOpen(false); 
                  navigate('/cart');
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default CombinedNavbar;