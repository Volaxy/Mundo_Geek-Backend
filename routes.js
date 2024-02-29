import Router from "express";

import { register } from "./src/controllers/account.js";

const router = Router();

// REGISTER
router.post("/register", register);

export {
    router
};