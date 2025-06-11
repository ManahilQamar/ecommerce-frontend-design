import React from 'react';

const Deals = () => {
  const products = [
    { id: 1, name: 'Smart watches', image: '/images/phone.jpg', discount: 30 },
    { id: 2, name: 'Laptop', image: '/images/Laptop.jpg', discount: 40 },
    { id: 3, name: 'GoPro cameras', image: '/images/cameras.jpg', discount: 25 },
    { id: 4, name: 'Headphones', image: '/images/Headphones.jpg', discount: 35 },
    { id: 5, name: 'Canon cameras', image: '/images/watch.jpg', discount: 35 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-11">
      {/* Mobile header */}
      <div className="block md:hidden mb-6">
        <div className="font-bold text-lg">Deals and offers</div>
        <h2 className="font-light text-gray-600">Hyglene equpments</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 ">
        {/* Timer Section */}
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

        {/* Products */}
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
    </div>
  );
};

export default Deals;