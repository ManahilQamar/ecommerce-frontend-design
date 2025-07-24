// src/components/SearchResults/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from 'prop-types';

const SearchResults = ({ products }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Filter products based on search query (case-insensitive)
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    (product.description && product.description.toLowerCase().includes(query))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No products found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  products: PropTypes.array.isRequired
};

export default SearchResults;