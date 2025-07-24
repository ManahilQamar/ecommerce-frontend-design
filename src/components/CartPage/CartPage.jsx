import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CombinedNavbar = ({ cart }) => {
  // ... existing CombinedNavbar code remains the same ...
};

const CartPage = ({ cart: initialCart, setCart: parentSetCart }) => {
  const navigate = useNavigate();
  const [localCart, setLocalCart] = useState(initialCart);
  const [savedItems, setSavedItems] = useState([
    { id: 101, name: 'Wireless Headphones', price: 89.99, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 102, name: 'Smart Watch', price: 199.99, image: '/images/watch.png' }
  ]);
  const [discount, setDiscount] = useState(15.00);
  const [couponCode, setCouponCode] = useState('');

  // Sync local cart with parent cart
  useEffect(() => {
    parentSetCart(localCart);
  }, [localCart, parentSetCart]);

  // Calculate cart totals
  const subtotal = localCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal - discount + tax;
  const cartCount = localCart.reduce((acc, item) => acc + item.quantity, 0);

  // Cart item operations
  const handleIncreaseQuantity = (itemId) => {
    setLocalCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setLocalCart(prevCart => 
      prevCart
        .map(item => 
          item.id === itemId 
            ? { ...item, quantity: Math.max(1, item.quantity - 1) } 
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemove = (itemId) => {
    setLocalCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const handleSaveForLater = (item) => {
    handleRemove(item.id);
    setSavedItems(prev => [...prev, {...item, quantity: 1}]);
  };

  const handleMoveToCart = (item) => {
    setSavedItems(prev => prev.filter(i => i.id !== item.id));
    
    setLocalCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);
      return existingItem
        ? prevCart.map(i => 
            i.id === item.id 
              ? { ...i, quantity: i.quantity + 1 } 
              : i
          )
        : [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE15') {
      setDiscount(15.00);
      alert('Coupon applied successfully!');
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    if (localCart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Proceeding to checkout!');
    // In a real app: navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          My Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
        </h1>
        <button 
          onClick={() => navigate(-1)} 
          className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Continue Shopping
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h2 className="text-lg font-medium text-gray-900">Cart Items</h2>
            </div>
            
            {localCart.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 sm:h-16 w-12 sm:w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="mt-3 sm:mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-500">Add items to your cart to see them here</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {localCart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-4 sm:pb-6 gap-4">
                    <div className="flex-shrink-0 w-full sm:w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      )}
                    </div>
                    
                    <div className="flex-grow w-full sm:w-auto">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: Medium, Color: Blue</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="px-2 sm:px-3 py-1 text-gray-600 hover:text-gray-900"
                          >
                            -
                          </button>
                          <span className="px-2 sm:px-3 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="px-2 sm:px-3 py-1 text-gray-600 hover:text-gray-900"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveForLater(item)}
                            className="text-sm sm:text-base text-indigo-600 hover:text-indigo-800"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-sm sm:text-base text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="self-end sm:self-auto">
                      <p className="text-base sm:text-lg font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Saved for Later Section */}
          {savedItems.length > 0 && (
            <div className="mt-6 bg-white shadow rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3 sm:mb-4">Saved for Later</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {savedItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 bg-gray-200 rounded-md overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      )}
                    </div>
                    
                    <div className="ml-3 flex-grow">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm sm:text-base text-gray-900 font-medium mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex ml-2">
                      <button 
                        onClick={() => handleMoveToCart(item)}
                        className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Move to cart"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => setSavedItems(prev => prev.filter(i => i.id !== item.id))}
                        className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-1"
                        aria-label="Remove"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 sticky top-4 sm:top-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3 sm:mb-4">Order Summary</h2>
            
            {/* Coupon Section */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-md font-medium text-gray-900 mb-2">Have a coupon?</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Add coupon" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-grow border border-gray-300 rounded-l-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button 
                  onClick={handleApplyCoupon}
                  className="bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
                >
                  Apply
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Try "SAVE15" for $15 discount</p>
            </div>
            
            {/* Order Summary Details */}
            <div className="border-t border-gray-200 pt-3 sm:pt-4">
              <div className="flex justify-between py-2 text-sm sm:text-base">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm sm:text-base">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600 font-medium">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm sm:text-base">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 sm:py-4 border-t border-gray-200 mt-2 text-base sm:text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-md mt-3 sm:mt-4 hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
            >
              Checkout
            </button>
            
            {/* Payment Methods */}
            <div className="mt-4 sm:mt-6">
              <h3 className="text-center text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">We accept</h3>
              <div className="flex justify-center space-x-3 sm:space-x-6">
                <div className="h-6 sm:h-8 w-8 sm:w-12 bg-gray-200 rounded-md flex items-center justify-center font-bold text-gray-700 text-xs sm:text-sm">VISA</div>
                <div className="h-6 sm:h-8 w-8 sm:w-12 bg-gray-200 rounded-md flex items-center justify-center font-bold text-gray-700 text-xs sm:text-sm">MC</div>
                <div className="h-6 sm:h-8 w-8 sm:w-12 bg-gray-200 rounded-md flex items-center justify-center font-bold text-gray-700 text-xs sm:text-sm">PP</div>
                <div className="h-6 sm:h-8 w-8 sm:w-12 bg-gray-200 rounded-md flex items-center justify-center font-bold text-gray-700 text-xs sm:text-sm">AP</div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-3">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">Secure payment</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Your payment information is processed securely.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-3">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">Customer support</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">24/7 assistance available for any questions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-3">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">Free delivery</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Free shipping on all orders over $50.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CombinedNavbar, CartPage };