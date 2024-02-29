import { User } from '../models/userModel.js';
import { UserAlreadyExistsError } from "../utils/errors/userError.js";

async function createUserUsecase(userBody) {
    const user = {
        username: userBody.username,
        password: userBody.password,
    };

    const existingUser = await User.findOne({ username: user.username });

    if(existingUser) {
        throw new UserAlreadyExistsError(400, "Username already exists");
    }

    const newUser = new User(user);
    const savedUser = await newUser.save();

    return savedUser;
}

export {
    createUserUsecase,
};