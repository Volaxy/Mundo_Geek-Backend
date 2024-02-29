import express from "express";

import { createUser } from "./src/controllers/userController.js";

const routes = express.Router();

// USER
routes.post("/register", createUser);

export {
    routes
};