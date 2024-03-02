class CategoryAlreadyExistsError extends Error {
    constructor(statusCode, message = "Categoria não encontrada") {
        super(message);

        this.statusCode = statusCode;
    }
}

class CategoryNotFoundError extends Error {
    constructor(statusCode, message = "Categoria não encontrada") {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    CategoryAlreadyExistsError,
    CategoryNotFoundError,
};