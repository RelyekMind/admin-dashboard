import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { auth } from '../firebase'; // Asegúrate de que la ruta es correcta

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        router.push('/login');
      })
      .catch(error => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <header className="p-4 flex justify-center items-center space-x-8 text-black text-xl">
      <nav>
        <ul className="flex justify-center items-center space-x-8">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/add-product">Añadir Producto</Link>
          </li>
          <li>
            <Link href="/update-stock">Actualizar Stock</Link>
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
