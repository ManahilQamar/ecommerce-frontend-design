import React from 'react';

const Deals = () => {
  const products = [
    { id: 1, name: 'Smart watches', image: 'https://static.vecteezy.com/system/resources/previews/046/829/689/non_2x/smart-watch-isolated-on-transparent-background-png.png', discount: 30 },
    { id: 2, name: 'Laptop', image: 'public/images/laptop.png', discount: 40 },
    { id: 3, name: 'GoPro cameras', image: 'https://pngimg.com/uploads/gopro/gopro_PNG9997.png', discount: 25 },
    { id: 4, name: 'Headphones', image: '/images/headphone.png', discount: 35 },
    { id: 5, name: 'Canon cameras', image: '/images/Canon.png', discount: 35 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-11">
      {/* Mobile header - left aligned text, right aligned timer */}
      <div className="block md:hidden mb-6">
        <div className="flex justify-between items-center mb-3">
          {/* Text on left */}
          <div className="text-left">
            <div className="font-bold text-lg">Deals and offers</div>
            <h2 className="font-light text-gray-600">Hyglene equpments</h2>
          </div>
          
          {/* Timer on right */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-300 text-center rounded text-xs font-bold py-2 px-2">
              <div className="text-gray-600">04</div>
              <div className="font-light text-gray-400">Days</div>
            </div>
            <div className="bg-gray-300 text-center rounded text-xs font-bold py-2">
              <div className="text-gray-600">13</div>
              <div className="font-light text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-300 text-center rounded text-xs font-bold py-2">
              <div className="text-gray-600">34</div>
              <div className="font-light text-gray-400">Min</div>
            </div>
            <div className="bg-gray-300 text-center rounded text-xs font-bold py-2">
              <div className="text-gray-600">56</div>
              <div className="font-light text-gray-400">Sec</div>
            </div>
          </div>
        </div>
        
        {/* Horizontal line below */}
        <div className="border-t border-gray-300 mt-4"></div>
      </div>

      {/* Desktop layout remains unchanged */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-6">
        {/* Timer Section - Desktop */}
        <div className="sm:col-span-2 md:col-span-1 bg-white p-3 rounded-lg shadow-sm">
          <div className="hidden md:block">
            <div className="font-bold text-lg">Deals and offers</div>
            <h2 className="font-light text-gray-600 mb-4">Hyglene equpments</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto md:mx-0">
            <div className="bg-gray-900 text-center rounded text-xs font-bold py-2">
              <div className="text-white">04</div>
              <div className="font-light text-gray-400">Days</div>
            </div>
            <div className="bg-gray-900 text-center rounded text-xs font-bold py-2">
              <div className="text-white">13</div>
              <div className="font-light text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-900 text-center rounded text-xs font-bold py-2">
              <div className="text-white">34</div>
              <div className="font-light text-gray-400">Min</div>
            </div>
            <div className="bg-gray-900 text-center rounded text-xs font-bold py-2">
              <div className="text-white">56</div>
              <div className="font-light text-gray-400">Sec</div>
            </div>
          </div>
        </div>

        {/* Products - Desktop */}
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-sm overflow-hidden hover:shadow-md transition duration-300 border border-gray-100 sm:col-span-2 md:col-span-1"
          >
            <div className="flex justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-sm font-medium text-gray-800 mb-2">{product.name}</h3>
              <div className="flex justify-center">
                <span 
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#FFDAB9', color: 'red' }}
                >
                  -{product.discount}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Products - Mobile (horizontal scroll) */}
      <div className="flex overflow-x-auto pb-4 space-x-4 sm:hidden">
        {products.map(product => (
          <div
            key={product.id}
            className="flex-shrink-0 w-40 bg-white shadow-sm overflow-hidden hover:shadow-md transition duration-300 border border-gray-100"
          >
            <div className="flex justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-24 object-contain"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xs font-medium text-gray-800 mb-1">{product.name}</h3>
              <div className="flex justify-center">
                <span 
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ backgroundColor: '#FFDAB9', color: 'red' }}
                >
                  -{product.discount}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;