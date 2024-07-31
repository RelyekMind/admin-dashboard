// components/Header.js
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase';

const Header = () => {
  const { user } = useAuth();
  const router = useRouter();
  const auth = getAuth(app);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  if (!user) {
    return null;
  }

  return (
    <header className="p-4 flex justify-center items-center space-x-8 text-black text-xl">
      <nav>
        <ul className="flex justify-center items-center space-x-8">
          <li>
            <Link href="/">Listado de productos</Link>
          </li>
          <li>
            <Link href="/add-product">Añadir Producto</Link>
          </li>
          <li>
            <Link href="/update-stock">Actualizar Stock</Link>
          </li>
          <li>
            <Link href="/featured-products">Productos Destacados</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;
