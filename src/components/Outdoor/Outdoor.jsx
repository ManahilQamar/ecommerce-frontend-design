import React from 'react';

const Outdoor = () => {
  const products = [
    { id: 1, name: 'Soft chairs', image: 'https://static.vecteezy.com/system/resources/thumbnails/039/652/230/small/ai-generated-soft-armchair-soft-chair-soft-sofa-stylish-armchair-luxurious-armchair-luxurious-chair-soft-armchair-transparent-background-png.png',  USDnumber: 19 },
    { id: 2, name: 'Lamp', image: 'https://png.pngtree.com/png-vector/20240321/ourmid/pngtree-bedside-lighting-nightstand-lamp-png-image_11961850.png',  USDnumber: 19 },
    { id: 3, name: 'Kitchen dishes', image: 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-dish-washing-illustration-png-image_10006852.png',  USDnumber: 19 },
    { id: 4, name: 'Coffee maker', image: 'https://static.vecteezy.com/system/resources/previews/044/198/059/non_2x/modern-coffee-maker-with-fresh-coffee-on-a-light-background-png.png',  USDnumber: 19 },
    { id: 5, name: 'Home appliance', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcV8bKTHZD7u4ioOIYA2Z6HjB6gb4TvooIew&s',  USDnumber: 100 },
    { id: 6, name: 'Blenders', image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/blender-xwJxed4-600.jpg',  USDnumber: 39 },
    { id: 7, name: 'Kitchen mixer', image: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-stand-mixer-white-background-png-image_11614072.png',  USDnumber: 19 },
    { id: 8, name: 'Bed sheets', image: 'https://static.vecteezy.com/system/resources/previews/047/606/260/non_2x/cotton-double-bed-sheets-isolated-on-transparent-background-png.png',  USDnumber: 10 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-11 rounded-md">
      <div className="grid grid-cols-5 grid-rows-2 gap-0">
        
        {/* Sidebar with image */}
        <div
          className="bg-cover bg-center shadow-md row-span-2 col-span-1 flex flex-col justify-between p-4 text-black "
          style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/minimal-bright-living-room-design-with-white-sofa-plants_208112-243.jpg')" }}
        >
          <h2 className="text-lg font-semibold drop-shadow">
            Home and <br /> Outdoor
          </h2>
          <button className="py-2 px-4 relative bottom-28 bg-white text-black text-sm font-semibold  hover:bg-gray-200 w-28">
            Source now
          </button>
        </div>

        {/* Product cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-sm hover:shadow-md transition duration-300 border border-gray-100 col-span-1 relative flex flex-col justify-between p-4 h-32 "
          >
            {/* Product info at top */}
            <div className="text-left">
              <h3 className=" font-semibold text-gray-800 text-base  ">{product.name}</h3>
              <p className=" text-gray-600 font-extralight text-sm">From  <br /> USD {product. USDnumber}</p>
            </div>

            {/* Image at bottom */}
            <div className="flex justify-end bottom-9 relative left-4 mt-auto">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-24 h-20  object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outdoor;
