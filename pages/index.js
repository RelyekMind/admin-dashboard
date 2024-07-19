import { auth } from '../firebase';
import Login from '../components/Login';
import AdminPage from '../components/AdminPage';
import { useState, useEffect } from 'react';

const Home = () => {
  const [user, setUser] = useState(null);

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

  return user ? <AdminPage /> : <Login />;
};

export default Home;
