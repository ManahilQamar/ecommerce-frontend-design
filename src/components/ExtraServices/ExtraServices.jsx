import React from 'react';
import { FaSearch, FaTools, FaShip, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Source from Industry Hubs',
    image: 'https://d3fmssennfe86p.cloudfront.net/en-us/wp-content/uploads/sites/4/2024/03/Vs-9.jpg',
  },
  {
    id: 2,
    title: 'Customize Your Products',
    image: 'https://images.unsplash.com/photo-1678845533659-9e1d219f0a01?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3IlMjBmdWxsfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Fast, reliable shipping by ocean or air',
    image: 'https://www.seaspace-int.com/wp-content/uploads/2017/12/Golden_Passenger_1.jpg',
  },
  {
    id: 4,
    title: 'Product monitoring and inspection',
    image: 'https://www.inspec-bv.com/marketing/sites/default/files/styles/1368x653_head_image/public/2023-05/inspec_product-inspection-guide-2.png?itok=4YiasiNB',
  },
];

// Map service IDs to icons
const serviceIcons = {
  1: <FaSearch size={15} className="text-black" />,
  2: <FaTools size={15} className="text-black" />,
  3: <FaShip size={15} className="text-black" />,
  4: <FaCheckCircle size={15} className="text-black" />,
};

const ExtraServices = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Extra Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col bg-white shadow-md rounded-lg"
          >
            {/* Top Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-28 object-cover rounded-md"
            />

            {/* Icon in Circle */}
            <div className="absolute right-3 top-24 bg-blue-100 w-10 h-10 rounded-full border-2 border-white 
            flex items-center justify-center shadow">
              {serviceIcons[service.id]}
            </div>

            {/* Bottom Text */}
            <p className="mt-8 p-4 font-medium">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
