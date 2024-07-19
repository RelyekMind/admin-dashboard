import React from 'react';
import AddProductForm from './AddProductForm';
import UpdateStockForm from './UpdateStockForm';
import ProductList from './ProductList';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const AdminPage = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <div className="admin-content">
        <section className="admin-section">
          <h2 className="text-xl font-semibold mb-2">Agregar producto</h2>
          <AddProductForm />
        </section>
        <section className="admin-section">
          <h2 className="text-xl font-semibold mb-2">Agregar Stock</h2>
          <UpdateStockForm />
        </section>
        <section className="admin-section">
          <h2 className="text-xl font-semibold mb-2">Inventario de Productos</h2>
          <ProductList />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
