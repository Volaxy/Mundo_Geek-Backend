class UserAlreadyExistsError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    UserAlreadyExistsError,
};