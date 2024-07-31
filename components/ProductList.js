import React from 'react';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="inventory-container">
      <h2 className="text-xl font-semibold mb-2">Lista de productos</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Imagen principal</th>
            <th>Otras imagenes</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
            <tr key={product.sku}>
              <td>{product.sku}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                {product.mainImage && <img src={product.mainImage} alt={product.title} className="inventory-image" />}
              </td>
              <td>
                {product.otherImages && product.otherImages.map((image, index) => (
                  <img key={index} src={image} alt={`${product.title} ${index + 1}`} className="inventory-image" />
                ))}
              </td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
