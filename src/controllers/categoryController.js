import { createCategoryUsecase, getCategoriesUsecase, getCategoryByNameUsecase } from "../services/categoryService.js";

async function createCategory(request, response) {
    try {
        const category = await createCategoryUsecase(request.body);

        response.status(201).json(category);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

async function getCategories(request, response) {
    try {
        const categories = await getCategoriesUsecase();

        response.status(200).json(categories);
    } catch(error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

async function getCategoryByName(request, response) {
    try {
        const category = await getCategoryByNameUsecase(request.params.name);

        response.status(200).json(category);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

export {
    createCategory,
    getCategories,
    getCategoryByName,
};
