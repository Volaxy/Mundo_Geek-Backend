import express from "express";

import { createUser, loginUser } from "./src/controllers/userController.js";

const routes = express.Router();

// USER
routes.post("/register", createUser);
routes.post("/login", loginUser);

export {
    routes
};