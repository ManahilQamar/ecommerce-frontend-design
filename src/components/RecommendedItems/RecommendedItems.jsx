import React from 'react';

const items = [
  {
    id: 1,
    name: 'T-shirts with multiple colors, for men',
    price: '$24.99',
    image: 'https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png',
  },
  {
    id: 2,
    name: 'Jeans shorts for men blue color',
    price: '$14.99',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/054/317/960/small_2x/men-s-denim-shorts-blue-jeans-casual-summer-fashion-apparel-clothing-style-png.png',
  },
  {
    id: 3,
    name: 'Brown winter coat medium size',
    price: '$49.99',
    image: 'https://pngimg.com/d/coat_PNG3.png',
  },
  {
    id: 4,
    name: 'Jeans bag for travel for men',
    price: '$29.99',
    image: 'https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-outdoor-waterproof-denim-sports-bag-png-image_12471733.png',
  },
  {
    id: 5,
    name: 'Leather wallet',
    price: '$19.99',
    image: 'https://pngimg.com/d/wallet_PNG7517.png',
  },
  {
    id: 6,
    name: 'Denim Jacket - Blue',
    price: '$39.99',
    image: 'https://static.vecteezy.com/system/resources/previews/051/494/933/non_2x/blue-trendy-denim-jacket-on-transparent-background-free-png.png',
  },
  {
    id: 7,
    name: 'Polo Shirt - Green',
    price: '$17.99',
    image: 'https://static.vecteezy.com/system/resources/previews/055/756/316/non_2x/green-polo-mockup-front-view-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 8,
    name: 'Sneakers - White',
    price: '$44.99',
    image: 'https://png.pngtree.com/png-clipart/20220616/original/pngtree-white-shoes-png-image_8080511.png',
  },
  {
    id: 9,
    name: 'Chinos - Khaki',
    price: '$27.99',
    image: 'https://png.pngtree.com/png-clipart/20240103/original/pngtree-mens-khaki-pants-isolated-on-a-white-background-3d-rendering-png-image_14002878.png',
  },
  {
    id: 10,
    name: 'Sweatshirt - Red',
    price: '$21.99',
    image: 'https://static.vecteezy.com/system/resources/previews/032/325/474/non_2x/red-hoodie-front-side-mockup-template-isolated-on-transparent-background-file-cut-out-ai-generated-png.png',
  },
];

const RecommendedItems = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Recommended Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded shadow p-3 ">
           <div className="h-[150px] flex items-center justify-center mb-2">
  <img
    src={item.image}
    alt={item.name}
    className="w-[150px] h-[150px] object-contain"
  />
</div>

            <p className="text-black font-bold">{item.price}</p>
            <h3 className="text-sm text-gray-500 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
