import express from "express";

import { createUser, loginUser } from "./src/controllers/userController.js";
import { createProduct, getProducts } from "./src/controllers/productController.js";

const routes = express.Router();

// USER
routes.post("/register", createUser);
routes.post("/login", loginUser);

// Product
routes.post("/products", createProduct);
routes.get("/products", getProducts);

export {
    routes
};