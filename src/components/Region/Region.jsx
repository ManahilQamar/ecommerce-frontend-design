import React from 'react'

const suppliers = [
  {
    id: 1,
    name: 'Arab Emirates',
    flag: 'images/images/flags/AE@2x.png',
    site: 'shopenam.ae',
  },
  {
    id: 2,
    name: 'Australia',
    flag: 'images/images/flags/AU@2x.png',
    site: 'shopenam.sa',
  },
  {
    id: 3,
    name: 'United States',
    flag: 'images/images/flags/US@2x.png',
    site: 'shopenam.pk',
  },
  {
    id: 4,
    name: 'Russia',
    flag: 'images/images/flags/RU@2x.png',
    site: 'shopenam.in',
  },
  {
    id: 5,
    name: 'Italy',
    flag: 'images/images/flags/IT@2x.png',
    site: 'shopenam.us',
  },
  {
    id: 6,
    name: 'Denmark',
    flag: 'images/images/flags/DE@2x.png',
    site: 'shopenam.uk',
  },
  {
    id: 7,
    name: 'France',
    flag: 'images/images/flags/FR@2x.png',
    site: 'shopenam.de',
  },
  {
    id: 8,
    name: 'Canada',
    flag: 'images/images/flags/CN@2x.png',
    site: 'shopenam.ca',
  },
  {
    id: 9,
    name: 'China',
    flag: 'images/images/flags/CN@2x.png',
    site: 'shopenam.ca',
  },
  {
    id: 8,
    name: 'Great Britain',
    flag: 'images/images/flags/GB@2x.png',
    site: 'shopenam.ca',
  },
]

const Region = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Suppliers by Region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5">
        {suppliers.map((region) => (
          <div
            key={region.id}
            className="flex items-center gap-3 p-3  shadow-sm hover:shadow-md transition"
          >
            <img
              src={region.flag}
              alt={region.name}
              className="w-10 h-6 object-contain"
            />
            <div>
              <h3 className="text-base font-semibold">{region.name}</h3>
              <p className="text-sm text-gray-500">{region.site}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Region
