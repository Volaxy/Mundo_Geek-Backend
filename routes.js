import express from "express";

import { createUser, loginUser } from "./src/controllers/userController.js";
import { createProduct, getProducts } from "./src/controllers/productController.js";
import { createCategory, getCategories, getCategoryByName } from "./src/controllers/categoryController.js";

const routes = express.Router();

// USER
routes.post("/register", createUser);
routes.post("/login", loginUser);

// Product
routes.post("/products", createProduct);
routes.get("/products", getProducts);

// Category
routes.post("/category", createCategory);
routes.get("/category", getCategories);
routes.get("/category/:name", getCategoryByName);

export {
    routes
};