import { Category } from '../models/categoryModel.js';
import { CategoryAlreadyExistsError, CategoryNotFoundError } from "../utils/errors/categoryError.js";

async function createCategoryUsecase(categoryBody) {
    const category = {
        name: categoryBody.name.toLowerCase(),
    };

    const existingCategory = await Category.findOne({ name: category.name });
    if(existingCategory) throw new CategoryAlreadyExistsError(400, "Já existe uma categoria com esse nome");

    const newCategory = new Category(category);
    const savedCategory = await newCategory.save();

    return savedCategory;
}

async function getCategoryByNameUsecase(name) {
    const category = await Category.findOne({ name: name.toLowerCase() }).populate("products");
    if(!category) throw new CategoryNotFoundError(404, "A categoria com esse nome não foi encontrada");

    return category;
}

export {
    createCategoryUsecase,
    getCategoryByNameUsecase,
};