import { useRouter } from 'next/router';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noHeaderRoutes = ['/login']; // Añade aquí todas las rutas donde no quieres mostrar el header

  return (
    <div>
      {!noHeaderRoutes.includes(router.pathname) && <Header />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
