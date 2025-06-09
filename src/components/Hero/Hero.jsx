import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section Container */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Categories Section */}
        <div className="w-full lg:w-1/5 bg-white p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Popular Categories</h3>
          <ul className="space-y-3">
            {[
              "Electronics",
              "Apparel & Fashion",
              "Home & Garden",
              "Beauty & Personal Care",
              "Sports & Outdoors",
              "Toys & Games",
              "Machinery & Tools",
              "Food & Beverage",
              "Health & Medical",
              "Packaging & Printing"
            ].map((category) => (
              <li
                key={category}
                className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors"
              >
                {category}
              </li>
            ))}
            <li className="mt-4">
              <button className="text-orange-500 font-semibold hover:underline">
                View All Categories →
              </button>
            </li>
          </ul>
        </div>

        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Image and Text Overlay */}
          <div className="relative w-full md:w-3/4 h-[300px] md:h-auto">
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
            <div className="flex items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Hi, User! Let's get started
              </h2>
              <div className="ml-2 bg-blue-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col space-y-3 mb-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                Join Now
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 w-full">
                Login
              </button>
            </div>

            {/* Promotions */}
            <div className="space-y-3">
              <div className="bg-orange-500 text-white p-3 rounded-lg shadow-md text-sm">
                Get US $10 off with new supplier
              </div>
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md text-sm">
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
