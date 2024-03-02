class UserAlreadyExistsError extends Error {
    constructor(statusCode, message = "O nome de usuário já existe") {
        super(message);

        this.statusCode = statusCode;
    }
}

class UserNotFoundError extends Error {
    constructor(statusCode, message = "Usuário não encontrado") {
        super(message);

        this.statusCode = statusCode;
    }
}

export {
    UserAlreadyExistsError,
    UserNotFoundError,
};