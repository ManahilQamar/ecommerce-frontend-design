import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';

const Footer = () => {
 
  return (
    <footer className="bg-white text-black py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-2 gap-8">
        {/* Company Info */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Shopenam</h2>
          <p className="text-sm text-gray-700 mb-6">
            Your trusted platform for suppliers across the globe. Delivering quality and value.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-gray-700">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Find Store</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Blogs</a></li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Partnership</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Become a Supplier</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Business Solutions</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Resources</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Shipping Info</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Returns Policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors">Cookies</a></li>
          </ul>
        </div>

        {/* Get App */}
        <div>
          <h3 className="text-center text-lg font-bold mb-3">Get App</h3>
          <div className="sm:flex-row">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors sm:w-auto min-w-[180px] mb-2"
            >
              <FaApple className="text-2xl" />
              <div className="text-left leading-tight">
                <p className="text-xs font-light">Download on the</p>
                <p className="font-medium">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors sm:w-auto min-w-[180px]"
            >
              <FaGooglePlay className="text-xl" />
              <div className="text-left leading-tight">
                <p className="text-xs font-light">GET IT ON</p>
                <p className="font-medium">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
