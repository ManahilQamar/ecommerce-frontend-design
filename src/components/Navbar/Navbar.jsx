// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CombinedNavbar = ({ cart, setCart }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { 
      name: 'Profile', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => setIsProfileDropdownOpen(!isProfileDropdownOpen)
    },
    { 
      name: 'Messages', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      action: () => navigate('/messages')
    },
    { 
      name: 'Orders', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      action: () => navigate('/orders')
    },
    { 
      name: 'Cart', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      action: () => setIsCartOpen(!isCartOpen)
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
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

  return (
    <header>
      <nav className={`bg-white shadow-md py-3 px-4 md:px-8 border-b border-gray-300 transition-all duration-300 ${isSticky ? 'sticky top-0 z-50' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-3 text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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

            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div className="text-xl font-bold text-indigo-500 ml-2">Brand</div>
            </div>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative flex">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full rounded-lg border-2 border-blue-600 pl-4 pr-10 py-2 
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          hover:shadow-md transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-r-md bg-indigo-600 text-white px-5 py-2 
                          hover:bg-indigo-700 transition-colors"
                aria-label="Submit search"
              >
                Search
              </button>
            </form>
          </div>

          {/* Nav Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                <button
                  onClick={item.action}
                  className="rounded-full hover:bg-gray-100 transition-colors relative p-2"
                  aria-label={item.name}
                >
                  {item.icon}
                  {item.name === 'Cart' && cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
                <span className="text-xs text-gray-600 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Icons - Only show Profile and Cart */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-2 relative"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              aria-label="Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative mr-2"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Cart"
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

        {/* Mobile Search Field */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch} className="relative flex">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden bg-gray-50 rounded-lg py-4 px-2">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center group p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                  <button
                    onClick={item.action}
                    className="p-2"
                    aria-label={item.name}
                  >
                    {item.icon}
                    {item.name === 'Cart' && cartCount > 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <span className="text-sm mt-1 text-gray-600 group-hover:text-indigo-600">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Profile Dropdown */}
      {isProfileDropdownOpen && (
        <div className="fixed md:absolute md:right-8 md:top-16 right-4 top-20 bg-white shadow-lg rounded-md z-[1000] w-48 py-1">
          <Link 
            to="/profile" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsProfileDropdownOpen(false)}
          >
            Your Profile
          </Link>
          <Link 
            to="/settings" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsProfileDropdownOpen(false)}
          >
            Settings
          </Link>
          <Link 
            to="/logout" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsProfileDropdownOpen(false)}
          >
            Sign out
          </Link>
        </div>
      )}

      {/* Overlay */}
      {(isCartOpen || isProfileDropdownOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-[999]"
          onClick={() => {
            setIsCartOpen(false);
            setIsProfileDropdownOpen(false);
          }}
          aria-hidden="true"
        ></div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg z-[1000] p-5 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Shopping Cart ({cartCount})</h2>
            <button 
              onClick={() => setIsCartOpen(false)} 
              className="text-gray-500 hover:text-red-500 text-2xl"
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="mt-4 text-gray-600">Your cart is empty</p>
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/');
                }}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="ml-4 text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between py-2">
                  <span>Subtotal:</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-lg">
                  <span>Total:</span>
                  <span>${cartTotal}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition mt-4"
                onClick={() => {
                  setIsCartOpen(false); 
                  navigate('/checkout');
                }}
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/');
                }}
                className="w-full bg-white text-indigo-600 py-2 rounded border border-indigo-600 hover:bg-indigo-50 transition mt-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

CombinedNavbar.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
};

export default CombinedNavbar;