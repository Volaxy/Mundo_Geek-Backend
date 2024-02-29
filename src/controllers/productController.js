import { createProductUsecase, getProductsUsecase } from "../services/productService.js";

async function createProduct(request, response) {
    try {
        const product = await createProductUsecase(request.body);

        response.status(201).json(product);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

async function getProducts(request, response) {
    try {
        const products = await getProductsUsecase();

        response.status(200).json(products);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

export {
    createProduct,
    getProducts,
};
