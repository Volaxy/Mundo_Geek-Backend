import { createCategoryUsecase, getCategoryByNameUsecase } from "../services/categoryService.js";

async function createCategory(request, response) {
    try {
        const category = await createCategoryUsecase(request.body);

        response.status(201).json(category);
    } catch (error) {
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
    getCategoryByName,
};
