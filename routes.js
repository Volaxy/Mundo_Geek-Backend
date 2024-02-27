const Router = require("express");

const { register } = require("./src/controllers/account");

const router = Router();

// REGISTER
router.get("/register", register);

module.exports = router;