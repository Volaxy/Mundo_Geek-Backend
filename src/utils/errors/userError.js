class UserAlreadyExistsError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
    }
}

class UserNotFoundError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    UserAlreadyExistsError,
    UserNotFoundError,
};