import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, increment } from 'firebase/firestore';

const UpdateStockForm = () => {
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Query to find the document with the specified SKU
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('sku', '==', sku));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming SKU is unique, so there should be only one document
      const productDoc = querySnapshot.docs[0];
      await updateDoc(productDoc.ref, {
        stock: increment(quantity)
      });

      setSku('');
      setQuantity(0);
    } else {
      console.error('No document with the specified SKU found.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>SKU</label>
        <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} className="form-input" />
      </div>
      <div className="form-group">
        <label>Cantidad a agregar</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="form-input" />
      </div>
      <button type="submit" className="submit-button">Actualizar Stock</button>
    </form>
  );
};

export default UpdateStockForm;
