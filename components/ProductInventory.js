import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => doc.data());
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Lista de productos</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">SKU</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nombre Producto</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Descripcion</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Imagen principal</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Otras imagenes</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Precio</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="text-left py-3 px-4">{product.sku}</td>
              <td className="text-left py-3 px-4">{product.title}</td>
              <td className="text-left py-3 px-4">{product.description}</td>
              <td className="text-left py-3 px-4">
                <img src={product.mainImage} alt={product.title} width="50" height="50" />
              </td>
              <td className="text-left py-3 px-4">
                {product.otherImages.map((img, i) => (
                  <img key={i} src={img} alt={`${product.title} ${i}`} width="50" height="50" />
                ))}
              </td>
              <td className="text-left py-3 px-4">${product.price}</td>
              <td className="text-left py-3 px-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInventory;
