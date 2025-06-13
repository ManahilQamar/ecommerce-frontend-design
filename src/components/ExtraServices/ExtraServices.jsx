import React from 'react';

const services = [
  {
    id: 1,
    title: 'Fast Delivery',
    image: '/images/watch.png',
  },
  {
    id: 2,
    title: '24/7 Support',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Easy Return',
    image: 'images/laptop.png',
  },
  {
    id: 4,
    title: 'Secure Payment',
    image: 'https://via.placeholder.com/150',
  },
];

const ExtraServices = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Extra Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Top Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-28 object-cover rounded-md"
            />

            {/* Empty Circle Icon - Left-aligned below image */}
            <div className="absolute right-3 top-24 bg-blue-200 w-10 h-10 rounded-full border-2 border-white"></div>

            {/* Bottom Text */}
            <p className="mt-8 text-center font-medium">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
