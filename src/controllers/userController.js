import { createUserUsecase, loginUserUsecase } from "../services/userService.js";

async function createUser(request, response) {
    try {
        const user = await createUserUsecase(request.body);

        response.status(201).json(user);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

async function loginUser(request, response) {
    try {
        const username = await loginUserUsecase(request.body);

        response.status(200).json({ username });
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

export {
    createUser,
    loginUser,
};
