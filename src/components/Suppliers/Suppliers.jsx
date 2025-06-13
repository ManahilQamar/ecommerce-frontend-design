import React from 'react';

const Suppliers = () => {
  return (
    <div className='p-4 '>

    <div
      className="relative w-full h-[450px] bg-cover bg-center  flex items-center justify-between px-11 text-white"
      style={{ backgroundImage: "url('/images/suppliers.png')" }} 
    >
      {/* Blue Light on Right */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-700/90 to-transparent pointer"></div>

      {/* Left Text */}
      <h1 className="z-10 text-3xl md:text-4xl font-bold max-w-md">
        An easy way to send requests to all suppliers
      <p className="z-10 top-4 relative text-sm font-extralight   max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, voluptate suscipit. adipisicing elit. Autem, voluptate suscipit.</p>
      </h1>

      {/* Right Form */}
      <div className="z-10 bg-white p-8 rounded-md max-w-md w-full text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Send quote to suppliers</h2>

        <div className="mb-3">
          
          <input
            type="text"
            className="w-full p-2 rounded bg-white/20 border border-black/30 text-black placeholder-black  focus:outline-none"
            placeholder="What item you need?"
          />
        </div>

        <div className="mb-3">
          <textarea
            className="w-full p-2 rounded bg-white/20 border border-black/30 text-black placeholder-black placeholder-opacity-40 focus:outline-none"
            rows="3"
            placeholder="Type more details..."
          ></textarea>
        </div>

        <div className="mb-4 flex gap-2">
          <input
            type="number"
            className=" p-2 rounded bg-white/20 border border-black/30 text-white placeholder-black placeholder-opacity-70 focus:outline-none"
            placeholder="Quantity"
          />
          <select className="p-2 w-28 rounded bg-white/20 border border-black/30 text-black focus:outline-none">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Box</option>
          </select>
        </div>

        <button className="w-28 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold">
          Send Inquiry
        </button>
      </div>
    </div>
    </div>

  );
};

export default Suppliers;
