import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section Container */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Categories Section */}
        <div className="w-full lg:w-1/5 bg-white p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
     
          <ul className="space-y-3">
            {[
              "Automobiles",
              "Cloths and Wear",
              "Home interiors",
              "Computer and tech",
              "Tools, equipments",
              "Sports & Outdoors",
              "Animal and pets",
              "Machinery tools"
            ].map((category) => (
              <li
                key={category}
                className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors"
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
        <div className="flex flex-col md:flex-row flex-1">
          {/* Image and Text Overlay */}
          <div className="relative w-full md:w-3/4 h-[360px] ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 md:p-8">
                <div className="text-center max-w-2xl">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                    Connecting Global Suppliers
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white opacity-90">
                    Find the best suppliers for your business needs worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full md:w-1/4 bg-gradient-to-br from-white to-gray-100 p-6 flex flex-col justify-center">
            <div className='bg-blue-100 rounded-md px-2 py-2 mb-2'>
            <div className="flex items-center space-x-3 mb-4   ">

            <div className=" bg-blue-200 rounded-full text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
              </div>

              <h2 className="font-medium text-gray-800">
                Hi, user let's get started
              </h2>
             
            </div>

            <div className="flex flex-col space-y-2 mb-6">
              <button className="bg-blue-700 hover:bg-orange-600 text-white font-semibold py-1 px-4 rounded-lg transition duration-300 w-full">
                Join now
              </button>
              <button className="border-2 border-gray-300 bg-white hover:border-gray-400 text-blue-700 font-semibold py-1 px-4 rounded-lg transition duration-300 w-full">
                Log in
              </button>
            </div>
            </div>

            {/* Promotions */}
            <div className="space-y-3">
              <div className="bg-orange-500 text-white p-3 rounded-lg shadow-md text-sm">
                Get US $10 off with new supplier
              </div>
              <div className="bg-sky-500 text-white p-3 rounded-lg shadow-md text-sm">
                Send quotes with Supplier preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
