import { User } from '../models/userModel.js';
import { UserAlreadyExistsError, UserNotFoundError } from "../utils/errors/userError.js";

async function createUserUsecase(userBody) {
    const user = {
        username: userBody.username,
        password: userBody.password,
    };

    const existingUser = await User.findOne({ username: user.username });

    if(existingUser) {
        throw new UserAlreadyExistsError(400, "O nome de usuário já existe");
    }

    const newUser = new User(user);
    const savedUser = await newUser.save();

    return savedUser;
}

async function loginUserUsecase(userBody) {
    const user = {
        username: userBody.username,
        password: userBody.password,
    };

    const existingUser = await User.findOne({
        username: user.username,
        password: user.password
    });

    if(!existingUser) {
        throw new UserNotFoundError(406, "Nome de usuário ou senha incorretos");
    }

    return existingUser.username;
}

export {
    createUserUsecase,
    loginUserUsecase,
};