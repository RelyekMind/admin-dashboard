import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <h2 className="text-2xl font-bold text-center my-8">Product Inventory</h2>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
