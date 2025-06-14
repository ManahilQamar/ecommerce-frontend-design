import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '/images/images/flags/US@2x.png' },
  { code: 'zh', label: 'Chinese', flag: '/images/images/flags/CN@2x.png' },
  { code: 'ar', label: 'Arabic', flag: '/images/images/flags/AE@2x.png' },
  { code: 'ko', label: 'Korean', flag: '/images/images/flags/KR@2x.png' },
  { code: 'es', label: 'Spanish', flag: '/images/images/flags/ES@2x.png' },
];

const LastLine = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [openLang, setOpenLang] = useState(false);

  return (
    <div>
      {/* Bottom Line */}
      <div className="max-w-7xl bg-gray-200 mx-auto  p-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 border-t border-gray-300 pt-6 gap-4">
        <p>&copy; {new Date().getFullYear()} Shopenam. All rights reserved.</p>

        {/* Custom Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpenLang(!openLang)}
            className="flex items-center gap-2 px-3 py-2 rounded shadow-sm"
          >
            <img src={selectedLang.flag} alt={selectedLang.label} className="w-5 h-5" />
            <span className="text-sm text-gray-700">{selectedLang.label}</span>
            <svg className="w-4 h-4 text-gray-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4 3.625a.75.75 0 01-1.02 0l-4-3.625a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          {openLang && (
            <ul className="absolute right-0 bottom-full mb-2 w-40 rounded bg-white shadow-lg z-10">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang);
                    setOpenLang(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={lang.flag} alt={lang.label} className="w-5 h-5" />
                  <span className="text-sm text-gray-800">{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LastLine;
