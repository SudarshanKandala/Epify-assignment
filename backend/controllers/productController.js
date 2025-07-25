const productModel = require("../models/productModel.js");

exports.createProduct = async (request, response) => {
  try {
    const newProductData = request.body;
    const result = await productModel.create(newProductData);
    response.status(201).json({ product_id: result.insertId });
  } catch (error) {
    response.status(500).json({ message: "Failed to add product", error: error.message });
  }
};

exports.updateProductQuantity = async (request, response) => {
  const { id } = request.params;
  const { quantity } = request.body;
  console.log(`Updating product ID ${id} with quantity ${quantity}`);
  try {
    const updatedProduct = await productModel.updateQuantityById(id, quantity);
    if (!updatedProduct) {
      return response.status(404).json({ message: "Product not found" });
    }
    response.json(updatedProduct);
  } catch (error) {
    response.status(500).json({ message: "Update failed", error: error.message });
  }
};

exports.fetchProducts = async (request, response) => {
  const { page = 1, limit = 10 } = request.query;
  console.log(request.query);
  try {
    const productsList = await productModel.findAll(page, limit);
    response.json(productsList);
  } catch (error) {
    response.status(500).json({ message: "Could not fetch products", error: error.message });
  }
};