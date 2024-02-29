class ProductAlreadyExistsError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    ProductAlreadyExistsError,
};