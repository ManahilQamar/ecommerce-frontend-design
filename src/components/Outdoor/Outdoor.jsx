import React from 'react'

const Outdoor = () => {
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


      <div className="grid grid-cols-1 sm:grid-cols-6 ">
        {/* Timer Section */}
        <div className="sm:col-span-2 md:col-span-1 bg-white p-3 rounded-lg shadow-sm">
         
       
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
export default Outdoor
