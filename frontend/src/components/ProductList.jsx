import React from 'react';

const ProductList = ({ products, onUpdateQuantity }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-12 text-center bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">No Products Found</h3>
        <p className="mt-1 text-sm text-gray-500">Add a new product to get started!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">SKU</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3 text-right">Price</th>
            <th scope="col" className="px-6 py-3 text-center">Quantity</th>
            <th scope="col" className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.sku}</td>
              <td className="px-6 py-4">{product.type}</td>
              <td className="px-6 py-4 text-right">${parseFloat(product.price).toFixed(2)}</td>
              <td className="px-6 py-4 text-center font-semibold">{product.quantity}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => onUpdateQuantity(product)}
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
