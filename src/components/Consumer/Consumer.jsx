import React from 'react';

const Consumer = () => {
  const products = [
    { id: 1, name: 'Smart Watch', image: '/images/watch.png',  USDnumber: 19 },
    { id: 2, name: 'Laptop', image: '/images/laptop.png',  USDnumber: 19 },
    { id: 3, name: 'GoPro Camera', image: '/images/camera.png',  USDnumber: 19 },
    { id: 4, name: 'Headphones', image: '/images/headphone.png',  USDnumber: 19 },
    { id: 5, name: 'Phone', image: '/images/phone.jpg',  USDnumber: 100 },
    { id: 6, name: 'Tablet', image: '/images/tablet.jpg',  USDnumber: 39 },
    { id: 7, name: 'Smart Glasses', image: '/images/glasses.jpg',  USDnumber: 19 },
    { id: 8, name: 'Drone', image: '/images/drone.jpg',  USDnumber: 10 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-11 rounded-md">
      <div className="grid grid-cols-5 grid-rows-2 gap-0">
        
        {/* Sidebar with image */}
        <div
          className="bg-cover bg-center shadow-md row-span-2 col-span-1 flex flex-col justify-between p-4 text-black "
          style={{ backgroundImage: "url('/images/home.png')" }}
        >
          <h2 className="text-lg font-semibold drop-shadow">
            Home and <br /> Consumer
          </h2>
          <button className="py-2 px-4 bg-white text-black text-sm font-semibold  hover:bg-gray-200 w-28">
            Source now
          </button>
        </div>

        {/* Product cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-sm hover:shadow-md transition duration-300 border border-gray-100 col-span-1 relative flex flex-col justify-between p-4 h-32 "
          >
            {/* Product info at top */}
            <div className="text-left">
              <h3 className=" font-semibold text-gray-800 text-base  ">{product.name}</h3>
              <p className=" text-gray-600 font-extralight text-sm">From  <br /> USD {product. USDnumber}</p>
            </div>

            {/* Image at bottom */}
            <div className="flex justify-end bottom-9 relative left-4 mt-auto">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-24 h-20  object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consumer;
