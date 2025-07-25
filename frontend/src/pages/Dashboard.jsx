import React, { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../services/api';
import ProductList from '../components/ProductList';
import AddProductModal from '../components/AddProductModal';
import UpdateQuantityModal from '../components/UpdateQuantityModal';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleOpenUpdateModal = (product) => {
    setSelectedProduct(product);
    setUpdateModalOpen(true);
  };

  return (
    <div className="container p-4 mx-auto md:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Inventory Dashboard</h1>
        <button
          onClick={() => setAddModalOpen(true)}
          className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add New Product
        </button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {!loading && !error && (
        <ProductList products={products} onUpdateQuantity={handleOpenUpdateModal} />
      )}

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onProductAdded={fetchProducts}
      />

      {selectedProduct && (
        <UpdateQuantityModal
          isOpen={isUpdateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          product={selectedProduct}
          onQuantityUpdated={fetchProducts} 
        />
      )}
    </div>
  );
};

export default Dashboard;
