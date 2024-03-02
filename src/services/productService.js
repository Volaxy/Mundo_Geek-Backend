import { Category } from "../models/categoryModel.js";
import { Product } from '../models/productModel.js';
import { CategoryNotFoundError } from "../utils/errors/categoryError.js";
import { ProductAlreadyExistsError } from "../utils/errors/productError.js";

async function createProductUsecase(productBody) {
    const product = {
        url: productBody.url,
        name: productBody.name.toLowerCase(),
        price: productBody.price,
        description: productBody.description,
    };

    const category = await Category.findOne({ name: productBody.category.toLowerCase() });
    if(!category) throw new CategoryNotFoundError(404, "Esta categoria não existe");

    product.category = category._id;

    const existingProduct = await Product.findOne({ category: product.category, name: product.name });
    if(existingProduct) throw new ProductAlreadyExistsError(400, "O produto com esse nome e categoria já existe");

    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();

    category.products.push(newProduct._id);
    await category.save();

    return savedProduct;
}

async function getProductsUsecase() {
    const products = await Product.find();

    return products;
}

export {
    createProductUsecase,
    getProductsUsecase,
};