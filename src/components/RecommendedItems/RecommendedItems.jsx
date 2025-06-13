import React from 'react';

const items = [
  {
    id: 1,
    name: 'Jeans Shorts for Men - Blue',
    price: '$24.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Casual T-Shirt - White',
    price: '$14.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Sports Shoes - Black',
    price: '$49.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Formal Shirt - Grey',
    price: '$29.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Track Pants - Navy',
    price: '$19.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Denim Jacket - Blue',
    price: '$39.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Polo Shirt - Green',
    price: '$17.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Sneakers - White',
    price: '$44.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Chinos - Khaki',
    price: '$27.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Sweatshirt - Red',
    price: '$21.99',
    image: 'https://via.placeholder.com/150',
  },
];

const RecommendedItems = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Recommended Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded shadow p-3 ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p className="text-black font-bold">{item.price}</p>
            <h3 className="text-sm text-gray-500 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
