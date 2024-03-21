const express = require('express');
const { ProductServices } = require('../services');

const productRouter = express.Router();

productRouter.get('/products', async (req, res) => {
    const products = await ProductServices.getProducts();
    res.json(products);
});

productRouter.post('/products', async (req, res) => {
    try{
        const product = await ProductServices.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

productRouter.put('/products/:id', async(req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    await ProductServices.editProduct(id, updatedData);
    res.status(200).json({message: 'Successfully edited' });
})

productRouter.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    await ProductServices.deleteProduct(id);
    res.status(200).json({message: 'Successfully deleted' });
})

module.exports = productRouter;