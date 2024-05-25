import express, { json } from "express";
import cors from "cors";

import { routes } from "./routes.js";
import "./src/db/connection.js";

const app = express();
app.use(json());
app.use(cors({
    origin: "*",
    methods: "POST,GET",
}));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
