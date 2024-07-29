import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase'; // Asegúrate de que esta sea la ruta correcta
import ProductInventory from '../components/ProductInventory';
import Login from '../components/Login'; // Importar el componente Login

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return user ? <ProductInventory /> : <Login />;
};

export default Home;
