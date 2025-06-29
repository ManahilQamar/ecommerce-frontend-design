import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const categories = [
    "Automobiles",
    "Cloths and Wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports & Outdoors",
    "Animal and pets",
    "Machinery tools"
  ];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className=" p-2 bg-gray-50 flex flex-col">

      {/* Mobile Categories - Horizontal Scroll */}
      <div className="lg:hidden p-4 bg-white overflow-x-auto whitespace-nowrap hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleProductClick(category)}
            className="mx-1 px-3 py-2 bg-gray-100 rounded-full text-sm text-blue-600 hover:bg-blue-100 transition-colors"
          >
            {category}
          </button>
        ))}
        <button className="mx-1 px-3 py-2 text-blue-500 font-semibold text-sm hover:underline">
          More Category
        </button>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Desktop Categories - Vertical List */}
        <div className="hidden lg:block w-full lg:w-1/5 bg-white p-2">
          <ul className="rounded-lg">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleProductClick(category)}
                className="text-gray-600 hover:bg-blue-100 p-2 rounded cursor-pointer transition-colors"
              >
                {category}
              </li>
            ))}
            <li className="mt-4">
              <button className="text-blue-500 font-semibold hover:underline">
                More Category
              </button>
            </li>
          </ul>
        </div>

        {/* Main Hero Section */}
        <div className="flex p-2 flex-col bg-white lg:flex-row flex-1">
          
          {/* Hero Image Section */}
          <div className="relative w-full lg:w-3/4 h-[250px] sm:h-[300px] md:h-[360px]">
            <div
              className="absolute top-2 inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/heroBg.png')",
              }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex p-4 md:p-10">
                <div className="max-w-2xl">
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-black opacity-90">
                    Latest trending
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 md:mb-4">
                    Electronic items
                  </p>
                  <button
                    onClick={() => handleProductClick(1)}
                    className="bg-white py-1 px-3 rounded-md"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full lg:w-1/4 bg-gradient-to-br from-white to-gray-100 p-2 flex flex-col justify-center">

            {/* Login/Signup - Hidden on Mobile */}
            <div className="hidden lg:block bg-blue-100 rounded-md p-2 mb-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-200 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-9 md:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className=" font-medium text-sm sm:text-base text-gray-800">
                  Hi, user let's get started
                </h2>
              <div className="flex flex-col space-y-2 mb-2">
                <button className="bg-blue-700 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 rounded-lg transition w-full text-sm sm:text-base">
                  Join now
                </button>
                <button className="border-2 border-gray-300 bg-white hover:border-gray-400 text-blue-700 font-semibold py-1.5 px-4 rounded-lg transition w-full text-sm sm:text-base">
                  Log in
                </button>
              </div>
            </div>

            {/* Offer Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="bg-orange-500 text-white p-3 rounded-md shadow-md text-xs sm:text-sm text-center flex items-center justify-center min-h-[80px]">
                Get US $10 off with a new supplier
              </div>
              <div className="bg-sky-500 text-white p-3 rounded-md shadow-md text-xs sm:text-sm text-center flex items-center justify-center min-h-[80px]">
                Send quotes with supplier preferences
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Hero;
