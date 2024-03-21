const { Product } = require("../models");

const getProducts = async () => {
  const products = await Product.find();
  return products;
};

const createProduct = (payload) => {
  const product = new Product(payload);
  return product.save();
};

const editProduct = async (productId, updatedData) => {
  const product = await Product.findById(productId);
  if(!product) {
    throw Error('Product does not exist');
  }
  try {
    await Product.findByIdAndUpdate({_id: productId}, updatedData);
  } catch(err) {
    console.log(err);
    throw err;
  }
}

const deleteProduct = async (productId) => {
  const product = await Product.findById(productId);
  if(!product) {
    throw Error('Product does not exist');
  }
  try {
     await Product.deleteOne({_id: productId});
  } catch(err) {
    console.log(err);
    throw err;
  }
}

const ProductServices = { createProduct, getProducts, deleteProduct, editProduct };

module.exports = ProductServices;
