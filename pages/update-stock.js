import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ajusta la ruta según tu configuración

const UpdateStock = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newStock, setNewStock] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
      setFilteredProducts(productList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleStockUpdate = async () => {
    if (selectedProduct) {
      const productRef = doc(db, 'products', selectedProduct.id);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const currentStock = productSnapshot.data().stock;
        await updateDoc(productRef, {
          stock: currentStock + parseInt(newStock, 10)
        });
        setShowModal(false);
        setNewStock(0);
        alert('Stock updated successfully');
        // Refetch products to update the UI
        const productsCollection = collection(db, 'products');
        const newProductSnapshot = await getDocs(productsCollection);
        const productList = newProductSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
        setFilteredProducts(productList);
      } else {
        alert('Product does not exist');
      }
    }
  };

  const openModal = product => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewStock(0);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actualizar Stock</h1>
      <div className="mb-4">
        <label>Buscar Producto:</label>
        <input
          type="text"
          placeholder="Buscar por nombre del producto"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded"
        />
      </div>
      {filteredProducts.map(product => (
        <div key={product.id} className="border p-4 mb-4 rounded flex justify-between items-center">
          <div>
            <img src={product.mainImage} alt={product.title} className="w-16 h-16 mb-2" />
            <p><strong>Nombre:</strong> {product.title}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
          </div>
          <button
            onClick={() => openModal(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Actualizar Stock
          </button>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Actualizar Stock para {selectedProduct.title}</h2>
            <label>Cantidad a agregar:</label>
            <input
              type="number"
              value={newStock}
              onChange={e => setNewStock(e.target.value)}
              className="border p-2 rounded mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleStockUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Actualizar Stock
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateStock;
