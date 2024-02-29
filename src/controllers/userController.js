import { createUserUsecase } from "../services/userService.js";

async function createUser(request, response) {
    try {
        const user = await createUserUsecase(request.body);

        response.status(201).json(user);
    } catch (error) {
        const { statusCode, message } = error;

        response.status(statusCode || 500).json({ error: message });
    }
}

async function getUsers(request, response) {
    try {
        const users = await find();
        response.status(200).json(users);
    } catch (userError) {
        response.status(500).json({ error: error.message });
    }
}

export {
    createUser,
    getUsers,
};
