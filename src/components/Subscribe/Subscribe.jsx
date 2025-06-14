import React from 'react'
import { FiMail } from 'react-icons/fi'

const Subscribe = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Subscribe to our Newsletter
        </h1>
        <p className="text-gray-600 mb-6">
          Get daily updates on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          {/* Email input with icon */}
          <div className="relative w-full sm:w-64">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FiMail />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-2 w-full border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subscribe button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe







