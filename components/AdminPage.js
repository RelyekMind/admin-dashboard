import AddProductForm from '../components/AddProductForm';
import UpdateStockForm from '../components/UpdateStockForm';
import ProductList from '../components/ProductList';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const AdminPage = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <div>Please log in to access the admin page.</div>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-4">
        <AddProductForm />
      </div>
      <div className="mb-4">
        <UpdateStockForm />
      </div>
      <ProductList />
    </div>
  );
};

export default AdminPage;
