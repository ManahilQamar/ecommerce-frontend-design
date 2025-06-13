import React, { useState, useEffect } from 'react';

const CombinedNavbar = () => {
  // State for main navbar
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // State for top navbar
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isShipOpen, setIsShipOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Navigation items with icons and names
  const navItems = [
    { 
      name: 'Profile', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      name: 'Messages', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    { 
      name: 'Orders', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      name: 'Cart', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsTopMenuOpen(false);
        setIsMobileMenuOpen(false);
        setShowSearch(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only close if click is outside dropdowns
      if (isTopMenuOpen || isHelpOpen || isLangOpen || isShipOpen) {
        setIsTopMenuOpen(false);
        setIsHelpOpen(false);
        setIsLangOpen(false);
        setIsShipOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isTopMenuOpen, isHelpOpen, isLangOpen, isShipOpen]);

  // Toggle dropdowns for top navbar
  const toggleDropdown = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setIsHelpOpen(dropdown === 'help' && activeDropdown !== 'help');
    setIsLangOpen(dropdown === 'lang' && activeDropdown !== 'lang');
    setIsShipOpen(dropdown === 'ship' && activeDropdown !== 'ship');
  };

  // Categories for the hamburger menu
  const categories = [
    { name: 'Electronics', icon: '📱' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Home & Kitchen', icon: '🏠' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Books', icon: '📚' },
    { name: 'Toys', icon: '🧸' },
    { name: 'Automotive', icon: '🚗' },
  ];

  // Help options
  const helpOptions = [
    { name: 'Customer Service', link: '#' },
    { name: 'Track Order', link: '#' },
    { name: 'Returns & Refunds', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Contact Us', link: '#' },
  ];

  // Language options
  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
  ];

  // Shipping options
  const shippingOptions = [
    { country: 'United States', flag: '/images/images/flags/US@2x.png' },
    { country: 'Canada', flag: '/images/images/flags/CN@2x.png' },
    { country: 'United Kingdom', flag: '/images/images/flags/GB@2x.png' },
    { country: 'Australia', flag: '/images/images/flags/AU@2x.png' },
    { country: 'Germany', flag: '/images/images/flags/DE@2x.png' },
    { country: 'Japan', flag: '/images/images/flags/JP@2x.png' },
  ];
  

  return (
    <header>
      {/* Main Navbar */}
      <nav className={`bg-white shadow-md py-3 px-4 md:px-8 border-b border-gray-300 transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-3 text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 px-0 py-1 rounded-md bg-blue-500 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div className="text-xl font-bold text-indigo-400 tracking-tight ml-2">Brand</div>
            </div>
          </div>

          {/* Search Section - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-4 md:mx-8">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full rounded-lg border-2 border-blue-600 pl-4 pr-10 py-2 
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          hover:shadow-md transition-all duration-300"
              />

              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-r-md bg-indigo-600 text-white px-5 py-2 
                                hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-2"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Navigation Icons with Names - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <button className=" rounded-full hover:bg-gray-100 transition-colors">
                    {item.icon}
                  </button>
                  <span className="text-xs  text-gray-600 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - Appears when search button is clicked */}
        {showSearch && (
          <div className="mt-3 md:hidden">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 
                                hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu - Appears when hamburger menu is clicked */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden bg-gray-50 rounded-lg py-4 px-2">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center group p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <button className="p-2">
                    {item.icon}
                  </button>
                  <span className="text-sm mt-1 text-gray-600 group-hover:text-indigo-600">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navbar */}
      <div className="bg-white text-black border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left section - Categories menu */}
            <div className="flex items-center">
              {/* Hamburger menu for categories */}
              <div className="relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTopMenuOpen(!isTopMenuOpen);
                    setActiveDropdown(isTopMenuOpen ? null : 'categories');
                  }}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="font-medium">All Categories</span>
                </button>
                
                {/* Category dropdown */}
                {isTopMenuOpen && (
                  <div className="absolute z-50 mt-1 w-64 rounded-md shadow-lg bg-white text-gray-800 overflow-hidden">
                    <div className="py-1">
                      {categories.map((category, index) => (
                        <a 
                          key={index} 
                          href="#" 
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <span className="mr-3 text-lg">{category.icon}</span>
                          <span>{category.name}</span>
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        View All Categories →
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation items - Desktop */}
              <div className="hidden md:flex md:ml-6 md:space-x-6">
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:text-gray-400 transition-colors">
                  Hot Offers
                </a>
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:text-gray-400 transition-colors">
                  Gift Boxes
                </a>
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:text-gray-400 transition-colors">
                  Projects
                </a>
                <a href="#" className="px-3 py-2 rounded-md font-medium hover:text-gray-400 transition-colors">
                  Menu item
                </a>

                {/* Help dropdown - Desktop */}
                <div className="relative top-2.5">
                  <button 
                    onClick={(e) => toggleDropdown('help', e)}
                    className="flex items-center text-sm font-medium hover:text-gray-400 
                     focus:outline-none"
                  >
                    <span>Help</span>
                    <svg 
                      className={`ml-1 h-4 w-4  transform transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isHelpOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-800 z-50">
                      <div className="py-1">
                        {helpOptions.map((option, index) => (
                          <a 
                            key={index} 
                            href={option.link} 
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {option.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right section - Dropdowns */}
            <div className="flex items-center space-x-3">
              {/* Language dropdown */}
              <div className="relative">
                <button 
                  onClick={(e) => toggleDropdown('lang', e)}
                  className="flex items-center text-sm font-medium hover:text-gray-400 focus:outline-none"
                >
                  <span>English</span>
                  <svg 
                    className={`ml-1 h-4 w-4 transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-800 z-50">
                    <div className="py-1">
                      {languageOptions.map((lang, index) => (
                        <a 
                          key={index} 
                          href="#" 
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <span className="mr-2">{lang.code.toUpperCase()}</span>
                          <span>{lang.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Ship To dropdown */}
              <div className="relative">
                <button 
                  onClick={(e) => toggleDropdown('ship', e)}
                  className="flex items-center text-sm font-medium hover:text-gray-400 focus:outline-none"
                >
                <span className="mr-1">
  <img src="images/images/flags/US@2x.png" alt="US flag" className="w-5 h-4 object-cover inline-block" />
</span>

                  <span>Ship To</span>
                  <svg 
                    className={`ml-1 h-4 w-4 transform transition-transform ${isShipOpen ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isShipOpen && (
  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-gray-800 z-50">
    <div className="py-1">
      <div className="px-4 py-2 text-xs text-gray-500">Select your country</div>
      {shippingOptions.map((country, index) => (
        <a 
          key={index} 
          href="#" 
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
        >
          <img 
            src={country.flag} 
            alt={country.country} 
            className="w-5 h-4 object-cover mr-2 rounded-sm"
          />
          <span>{country.country}</span>
        </a>
      ))}
    </div>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu for secondary navbar (small screens) */}
        {(isTopMenuOpen && window.innerWidth < 768) && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Hot Offers
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Gift Boxes
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Projects
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Menu item
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Help
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CombinedNavbar;