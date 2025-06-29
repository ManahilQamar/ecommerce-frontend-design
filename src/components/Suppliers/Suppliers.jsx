import React, { useState } from 'react';

const Suppliers = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 py-8 md:px-8">
      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/suppliers.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/85 to-transparent md:from-blue-800/90 md:via-blue-800/60 md:to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-6 sm:p-6 md:p-8 lg:p-10">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 text-white flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              An easy way to send requests to all suppliers
            </h1>
            <p className="text-base sm:text-lg opacity-90 max-w-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, voluptate suscipit. 
              Adipisicing elit. Autem, voluptate suscipit. Lorem ipsum dolor sit amet consectetur.
            </p>
            
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="md:hidden w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
              aria-label={showForm ? "Close form" : "Open form"}
            >
              {showForm ? 'Close Form' : 'Send Quote to Suppliers'}
            </button>
          </div>
          
          {/* Desktop Form (Hidden on Mobile) */}
          <div className="hidden md:block w-full md:w-1/2 lg:w-1/2 bg-white p-4 sm:p-8 rounded-xl shadow-xl text-gray-800">
            <FormContent />
          </div>
        </div>
      </div>

      {/* Mobile Form (Conditional) */}
      <div className={`md:hidden ${showForm ? 'block' : 'hidden'} mt-6 transition-all duration-300`}>
        <div className="bg-white p-4 sm:p-8 rounded-xl shadow-xl text-gray-800">
          <FormContent />
        </div>
      </div>
    </div>
  );
};

// Extracted form component for reusability
const FormContent = () => (
  <>
    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Send quote to suppliers</h2>
    
    <form className="space-y-4 md:space-y-5">
      {/* Item Input */}
      <div>
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          placeholder="What item you need?"
          aria-label="Item needed"
        />
      </div>
      
      {/* Details Textarea */}
      <div>
        <textarea
          className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition min-h-[100px]"
          placeholder="Type more details..."
          aria-label="Item details"
        ></textarea>
      </div>
      
      {/* Quantity and Unit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            placeholder="Quantity"
            aria-label="Item quantity"
          />
        </div>
        
        <div>
          <select 
            className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            aria-label="Measurement unit"
          >
            <option>Pcs</option>
            <option>Kg</option>
            <option>Box</option>
            <option>Liter</option>
            <option>Meter</option>
          </select>
        </div>
      </div>
      
      {/* Submit Button */}
      <button 
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Send inquiry"
      >
        Send Inquiry
      </button>
    </form>
  </>
);

export default Suppliers;