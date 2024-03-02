class ProductAlreadyExistsError extends Error {
    constructor(statusCode, message = "Produto não encontrado") {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    ProductAlreadyExistsError,
};