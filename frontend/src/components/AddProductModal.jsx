import React, { useState } from 'react';
import { addProduct } from '../services/api';

const AddProductModal = ({ isOpen, onClose, onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    sku: '',
    description: '',
    quantity: 0,
    price: 0,
    image_url: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await addProduct(formData);
      onProductAdded(); 
      onClose();       
    } catch (err) {
      setError('Failed to add product. Please check the details and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
            <input name="type" placeholder="Type (e.g., Electronics)" onChange={handleChange} className="w-full p-2 border rounded-md"/>
            <input name="sku" placeholder="SKU" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
            <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
            <input name="price" type="number" step="0.01" placeholder="Price" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
            <input name="image_url" placeholder="Image URL (Optional)" onChange={handleChange} className="w-full p-2 border rounded-md"/>
          </div>
          <textarea name="description" placeholder="Description (Optional)" onChange={handleChange} className="w-full p-2 border rounded-md"/>
          
          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end pt-4 space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300">
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
