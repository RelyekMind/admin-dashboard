// pages/featured-products.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as per your setup

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);

      const featuredCollection = collection(db, 'featured');
      const featuredSnapshot = await getDocs(featuredCollection);
      const featuredList = featuredSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeaturedProducts(featuredList.map(product => product.id));
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter(id => id !== productId);
      } else {
        if (prevSelected.length < 6) {
          return [...prevSelected, productId];
        } else {
          alert('You can only select up to 6 featured products.');
          return prevSelected;
        }
      }
    });
  };

  const handleSaveFeaturedProducts = async () => {
    const featuredCollectionRef = collection(db, 'featured');
    const existingFeaturedSnapshot = await getDocs(featuredCollectionRef);
    const batch = writeBatch(db);

    existingFeaturedSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    selectedProducts.forEach((productId) => {
      const productRef = doc(featuredCollectionRef, productId);
      batch.set(productRef, { id: productId });
    });

    await batch.commit();
    alert('Featured products updated successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Elegir Productos Destacados</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className={`border p-4 rounded ${selectedProducts.includes(product.id) ? 'border-blue-500' : ''}`}
            onClick={() => handleSelectProduct(product.id)}
          >
            <img src={product.mainImage} alt={product.title} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleSaveFeaturedProducts}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Guardar productos
      </button>
    </div>
  );
};

export default FeaturedProducts;
