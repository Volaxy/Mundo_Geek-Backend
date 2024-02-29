import { Product } from '../models/productModel.js';
import { ProductAlreadyExistsError } from "../utils/errors/productError.js";

async function createProductUsecase(productBody) {
    const product = {
        url: productBody.url,
        category: productBody.category,
        name: productBody.name,
        price: productBody.price,
        description: productBody.description,
    };

    const existingProduct = await Product.findOne({ category: product.category, name: product.name });

    if(existingProduct) {
        throw new ProductAlreadyExistsError(400, "Productname already exists");
    }

    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();

    return savedProduct;
}

export {
    createProductUsecase,
};