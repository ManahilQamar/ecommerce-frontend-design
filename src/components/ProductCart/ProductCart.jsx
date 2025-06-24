import React, { useMemo, useState } from 'react';

const ProductCart = () => {
  // State for dropdowns and filters
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({
    category: [], // Will contain only one category at a time
    brand: [],
    feature: [],
    minPrice: 0,
    maxPrice: 500,
    condition: [],
    rating: 0
  });
  
  // View mode state
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for detail view

  // Mock data
  const categories = ['All Accessories', 'Cases & Covers', 'Chargers', 'Headphones', 'Screen Protectors', 'Power Banks'];
  const brands = ['Samsung', 'Apple', 'Anker', 'Sony', 'Belkin', 'JBL'];
  const features = ['Wireless', 'Waterproof', 'Fast Charging', 'Bluetooth 5.0', 'Noise Cancelling'];
  const conditions = ['New', 'Refurbished', 'Open Box'];
  const ratings = [4, 3, 2, 1];

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.5,
      ratingCount: 32,
      orders: 154,
      shipping: 'Free shipping',
      description: 'Experience premium sound quality with our wireless headphones. Featuring noise cancellation technology and 30-hour battery life.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 98.00 },
        { quantity: '100-500', price: 90.00 },
        { quantity: '500+', price: 78.00 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'Classic shoes',
        material: 'Plastic material',
        design: 'Modern nice',
        customization: 'Customization logo and design custom packages',
        protection: 'Refund Policy',
        warranty: '2 years full warranty',
      },
      supplier: {
        name: 'Guanjoi Trading LLC',
        location: 'Germany, Berlin',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    },
    {
      id: 2,
      name: 'Smartphone Case',
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.2,
      ratingCount: 28,
      orders: 89,
      shipping: 'Free shipping',
      description: 'Protect your phone with our premium case. Shockproof and slim design.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 22.00 },
        { quantity: '100-500', price: 20.00 },
        { quantity: '500+', price: 18.00 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'Phone case',
        material: 'Silicone',
        design: 'Slim fit',
        customization: 'Custom logo available',
        protection: 'Refund Policy',
        warranty: '1 year warranty',
      },
      supplier: {
        name: 'TechGuard Inc',
        location: 'USA, California',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    },
    {
      id: 3,
      name: 'Fast Charger',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.7,
      ratingCount: 45,
      orders: 210,
      shipping: 'Free shipping',
      description: 'Charge your devices 50% faster with our advanced charging technology.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 27.00 },
        { quantity: '100-500', price: 25.00 },
        { quantity: '500+', price: 22.00 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'USB-C Charger',
        material: 'Plastic',
        design: 'Compact',
        customization: 'Custom branding available',
        protection: 'Refund Policy',
        warranty: '18 months',
      },
      supplier: {
        name: 'PowerUp Solutions',
        location: 'China, Shenzhen',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    },
    {
      id: 4,
      name: 'Screen Protector',
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.0,
      ratingCount: 36,
      orders: 142,
      shipping: 'Free shipping',
      description: 'Crystal clear protection for your device screen. Anti-scratch and anti-fingerprint.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 11.00 },
        { quantity: '100-500', price: 10.00 },
        { quantity: '500+', price: 8.50 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'Tempered Glass',
        material: 'Glass',
        design: 'Edge-to-edge',
        customization: 'Custom cut available',
        protection: 'Refund Policy',
        warranty: '6 months',
      },
      supplier: {
        name: 'ClearShield Ltd',
        location: 'Japan, Tokyo',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    },
    {
      id: 5,
      name: 'Power Bank 10000mAh',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      ratingCount: 51,
      orders: 187,
      shipping: 'Free shipping',
      description: 'Compact power bank with fast charging capability. Perfect for travel.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 36.00 },
        { quantity: '100-500', price: 34.00 },
        { quantity: '500+', price: 30.00 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'Portable Charger',
        material: 'Aluminum alloy',
        design: 'Sleek',
        customization: 'Custom colors available',
        protection: 'Refund Policy',
        warranty: '2 years',
      },
      supplier: {
        name: 'EnergyTech Corp',
        location: 'South Korea, Seoul',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    },
    {
      id: 6,
      name: 'Bluetooth Earbuds',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.3,
      ratingCount: 67,
      orders: 231,
      shipping: 'Free shipping',
      description: 'True wireless earbuds with crystal clear sound and long battery life.',
      inStock: true,
      priceTiers: [
        { quantity: '50-100', price: 75.00 },
        { quantity: '100-500', price: 70.00 },
        { quantity: '500+', price: 65.00 },
      ],
      specifications: {
        price: 'Negotiable',
        type: 'Wireless Earbuds',
        material: 'Plastic',
        design: 'Ergonomic',
        customization: 'Custom engraving',
        protection: 'Refund Policy',
        warranty: '1 year',
      },
      supplier: {
        name: 'SoundWave Audio',
        location: 'USA, New York',
        verified: true,
        shipping: 'Worldwide Shipping',
      }
    }
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleFilterChange = (filter, value) => {
    setFilters(prev => {
      if (filter === 'category') {
        // Single selection: replace the entire array with the new selection
        return { ...prev, [filter]: [value] };
      }
      else if (['brand', 'feature', 'condition'].includes(filter)) {
        const currentValues = [...prev[filter]];
        const index = currentValues.indexOf(value);
        
        if (index > -1) {
          currentValues.splice(index, 1);
        } else {
          currentValues.push(value);
        }
        
        return { ...prev, [filter]: currentValues };
      }
      return { ...prev, [filter]: value };
    });
  };

  const removeFilter = (filter, value) => {
    if (filter === 'category') {
      setFilters(prev => ({ ...prev, [filter]: [] }));
    }
    else if (['brand', 'feature', 'condition'].includes(filter)) {
      setFilters(prev => ({
        ...prev,
        [filter]: prev[filter].filter(item => item !== value)
      }));
    } else {
      const resetValues = {
        minPrice: 0,
        maxPrice: 500,
        rating: 0
      };
      setFilters(prev => ({ ...prev, [filter]: resetValues[filter] }));
    }
  };

  const categoryItemCounts = useMemo(() => ({
    'All Accessories': 142,
    'Cases & Covers': 24,
    'Chargers': 15,
    'Headphones': 33,
    'Screen Protectors': 20,
    'Power Banks': 18  
  }), []);

  // Calculate active filters count (excluding categories)
  const activeFilterCount = [
    ...filters.brand,
    ...filters.feature,
    ...filters.condition,
    filters.minPrice > 0 ? 'minPrice' : null,
    filters.maxPrice < 500 ? 'maxPrice' : null,
    filters.rating > 0 ? 'rating' : null
  ].filter(Boolean).length;

  // View mode handlers
  const handleGridView = () => setViewMode('grid');
  const handleListView = () => setViewMode('list');

  // Render product detail view
  const renderProductDetail = (product) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-slate-100">
        <button 
          onClick={() => setSelectedProduct(null)}
          className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to products
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Images */}
            <div className="md:w-1/2 p-6">
              <div className="bg-gray-200 border-2 border-dashed w-full h-96 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className="bg-gray-200 border-2 border-dashed w-24 h-24 rounded"></div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <button className="text-gray-400 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-orange-500">{product.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    {product.ratingCount} reviews
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {product.orders} sold
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                {product.inStock ? (
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">In Stock</span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Out of Stock</span>
                )}
              </div>
              
              {/* Price Tiers */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Price</h3>
                <div className="grid grid-cols-3 gap-4">
                  {product.priceTiers.map((tier, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-3 text-center">
                      <div className="font-bold">${tier.price}</div>
                      <div className="text-sm text-gray-600">{tier.quantity}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Specifications</h3>
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="text-gray-600 w-24">Price:</span>
                      <span>{product.specifications.price}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-24">Type:</span>
                      <span>{product.specifications.type}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-24">Material:</span>
                      <span>{product.specifications.material}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-24">Design:</span>
                      <span>{product.specifications.design}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-24">Customization:</span>
                      <span>{product.specifications.customization}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">&nbsp;</h3>
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="text-gray-600 w-24">Protection:</span>
                      <span>{product.specifications.protection}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-24">Warranty:</span>
                      <span>{product.specifications.warranty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Supplier Info */}
              <div className="border-t pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                    <span className="font-bold text-green-800">R</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{product.supplier.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">🇩🇪</span>
                      <span>{product.supplier.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.supplier.verified && (
                    <span className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified Seller
                    </span>
                  )}
                  <span className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {product.supplier.shipping}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Send inquiry
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition">
                    Seller's Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t">
            <div className="flex border-b">
              <button className="px-6 py-3 font-medium border-b-2 border-blue-500">Product Description</button>
              <button className="px-6 py-3 font-medium text-gray-500">Reviews</button>
              <button className="px-6 py-3 font-medium text-gray-500">Shipping</button>
              <button className="px-6 py-3 font-medium text-gray-500">About seller</button>
            </div>
            
            <div className="p-6">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        
        {/* You May Like Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">YOU MAY LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-40"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Related products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(2, 6).map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-40"></div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // If a product is selected, render its detail view
  if (selectedProduct) {
    return renderProductDetail(selectedProduct);
  }

  // Main product listing view
  return (
    <div className="max-w-7xl bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 p-4">
          {/* Categories Dropdown */}
          <div className="mb-4 relative border-b pb-2">
            <button 
              onClick={() => toggleDropdown('categories')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Categories</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'categories' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'categories' && (
              <div className="mt-2 space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      id={category}
                      checked={filters.category.includes(category)}
                      onChange={() => handleFilterChange('category', category)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor={category} className="ml-2 text-gray-900">
                      {category}
                      <span className="text-gray-500 text-xs"> ({categoryItemCounts[category]} items)</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Brands Dropdown */}
          <div className="mb-4 relative border-b pb-2">
            <button 
              onClick={() => toggleDropdown('brands')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Brands</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'brands' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'brands' && (
              <div className="mt-2 space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      id={brand}
                      checked={filters.brand.includes(brand)}
                      onChange={() => handleFilterChange('brand', brand)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor={brand} className="ml-2 text-gray-900">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Features Dropdown */}
          <div className="mb-4 relative border-b pb-2">
            <button 
              onClick={() => toggleDropdown('features')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Features</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'features' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'features' && (
              <div className="mt-2 space-y-2">
                {features.map(feature => (
                  <div key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      id={feature}
                      checked={filters.feature.includes(feature)}
                      onChange={() => handleFilterChange('feature', feature)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor={feature} className="ml-2 text-gray-900">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="mb-4 relative border-b pb-2">
            <button 
              onClick={() => toggleDropdown('price')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Price Range</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'price' && (
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-900">${filters.minPrice}</span>
                  <span className="text-sm text-gray-900">${filters.maxPrice}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Condition Dropdown */}
          <div className="mb-4 relative border-b pb-2">
            <button 
              onClick={() => toggleDropdown('condition')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Condition</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'condition' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'condition' && (
              <div className="mt-2 space-y-2">
                {conditions.map(condition => (
                  <div key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      id={condition}
                      checked={filters.condition.includes(condition)}
                      onChange={() => handleFilterChange('condition', condition)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor={condition} className="ml-2 text-gray-900">
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ratings Dropdown */}
          <div className="mb-4 relative">
            <button 
              onClick={() => toggleDropdown('ratings')}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium text-black">Customer Rating</span>
              <svg className={`h-5 w-5 transform ${openDropdown === 'ratings' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'ratings' && (
              <div className="mt-2 space-y-2">
                {ratings.map(rating => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="radio"
                      id={`${rating}stars`}
                      name="rating"
                      checked={filters.rating === rating}
                      onChange={() => handleFilterChange('rating', rating)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor={`${rating}stars`} className="ml-2 text-gray-900 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1">& Up</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setFilters({
              category: [],
              brand: [],
              feature: [],
              minPrice: 0,
              maxPrice: 500,
              condition: [],
              rating: 0
            })}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>

        {/* Product Grid Section */}
        <div className="w-full md:w-3/4">
          {/* CATEGORIES FILTER BAR */}
          <div className="rounded-lg shadow-md bg-white p-4 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              {filters.category.length === 0 ? (
                <span className="text-blue-300 text-sm">No category selected</span>
              ) : (
                filters.category.map(cat => (
                  <div key={`category-${cat}`}>
                    <span className="text-gray-600 mr-1">
                      {categoryItemCounts[cat]} items in
                    </span>
                    <span className="text-sm font-medium">
                      {cat} 
                    </span>
                  </div>
                ))
              )}
              <div className='flex relative left-[215px]'>
                <div className="flex items-center mr-2">
                  <input
                    type="checkbox"
                    id="verifiedOnly"
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="verifiedOnly" className="ml-2 text-gray-700">
                    Verified Only
                  </label>
                </div>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 px-4 pr-4 rounded leading-tight focus:outline-none focus:border-blue-500">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex ml-2 items-center rounded-sm border overflow-hidden">
                  <button 
                    onClick={handleGridView}
                    className={`p-1 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-slate-200 hover:text-blue-600'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleListView}
                    className={`p-1 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-slate-200 hover:text-blue-600'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER FILTERS BAR */}
          <div className="rounded-lg bg-white p-4 mb-6 shadow-md">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-gray-700">Filters:</span>
                
                {/* Brand Filters */}
                {filters.brand.map(brand => (
                  <div key={`brand-${brand}`} className="flex items-center border border-blue-500 bg-blue-50 rounded-md px-3 py-1">
                    <span className="text-sm font-medium"> {brand}</span>
                    <button 
                      onClick={() => removeFilter('brand', brand)}
                      className="ml-2 text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Feature Filters */}
                {filters.feature.map(feature => (
                  <div key={`feature-${feature}`} className="flex items-center border border-blue-500 bg-blue-50 rounded-md px-3 py-1">
                    <span className="text-sm font-medium">{feature}</span>
                    <button 
                      onClick={() => removeFilter('feature', feature)}
                      className="ml-2 text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Price Filter */}
                {(filters.minPrice > 0 || filters.maxPrice < 500) && (
                  <div className="flex items-center border border-blue-500 bg-blue-50 rounded-md px-3 py-1">
                    <span className="text-sm font-medium">
                      ${filters.minPrice} - ${filters.maxPrice}
                    </span>
                    <button 
                      onClick={() => {
                        handleFilterChange('minPrice', 0);
                        handleFilterChange('maxPrice', 500);
                      }}
                      className="ml-2 text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Condition Filters */}
                {filters.condition.map(cond => (
                  <div key={`condition-${cond}`} className="flex items-center border border-blue-500 bg-blue-50 rounded-md px-3 py-1">
                    <span className="text-sm font-medium">{cond}</span>
                    <button 
                      onClick={() => removeFilter('condition', cond)}
                      className="ml-2 text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Rating Filter */}
                {filters.rating > 0 && (
                  <div className="flex items-center border border-blue-500 bg-blue-50 rounded-md px-3 py-1">
                    <span className="text-sm font-medium">{filters.rating}+ Stars</span>
                    <button 
                      onClick={() => handleFilterChange('rating', 0)}
                      className="ml-2 text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Show message when no filters are applied */}
                {activeFilterCount === 0 && (
                  <span className="text-blue-300 text-sm">No filters applied</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {/* Clear All Filters Button */}
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      brand: [],
                      feature: [],
                      minPrice: 0,
                      maxPrice: 500,
                      condition: [],
                      rating: 0
                    }))}
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Filter Button for Mobile */}
                <div className="md:hidden flex items-center">
                  <button
                    className="flex items-center text-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="ml-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={`${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'}`}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition ${
                  viewMode === 'list' ? 'flex' : 'block'
                }`}
              >
                <div 
                  className={`bg-gray-200 border-2 border-dashed ${
                    viewMode === 'list' 
                      ? 'w-48 h-48 flex-shrink-0' 
                      : 'w-full h-48'
                  }`} 
                />
                
                <div className={`p-4 ${viewMode === 'list' ? 'flex-grow' : ''}`}>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-800 font-bold">${product.price.toFixed(2)} <span className='text-sm text-gray-400 line-through ml-2'>${product.originalPrice.toFixed(2)}</span></p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {viewMode === 'list' && (
                      <div className="flex items-center">
                        <span className="ml-1 text-orange-500">{product.rating}</span>
                        <span className="mx-1 ml-2 text-gray-400">•</span>
                        <span className='text-gray-400'>{product.orders} orders</span>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="text-green-600 font-medium ml-2">{product.shipping}</span>
                      </div>
                    )}
                  </div>
                 
                  {viewMode === 'list' && (
                    <p className="mt-3 text-gray-600">
                      {product.description.substring(0, 100)}...
                    </p>
                  )}
                  <div className="mt-3 flex">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="text-blue-600 hover:text-blue-400 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex items-center justify-between mt-8">
            {/* Show per page dropdown */}
            <div className="flex items-center">
              <div className="relative left-[450px]">
                <select className="block appearance-none  w-30 bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
                  <option>Show 10</option>
                  <option>Show 20</option>
                  <option>Show 50</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Pagination buttons */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100">
                &lt;
              </button>
              <button className="px-3 py-1 border-r border-gray-300 bg-blue-500 text-white">1</button>
              <button className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100">3</button>
              <button className="px-3 py-1 hover:bg-gray-100">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;