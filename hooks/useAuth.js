import { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase'; // Asegúrate de que esta ruta sea correcta

const auth = getAuth(firebaseApp);

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      setUser(rawUser);
      return rawUser;
    } else {
      setUser(false);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);
    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    return signOut(auth).then(() => setUser(false));
  };

  return {
    user,
    signOut: signOutUser,
  };
}
