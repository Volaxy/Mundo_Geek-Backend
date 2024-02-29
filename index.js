import express, { json } from 'express';

import { router } from "./routes.js";

const app = express();
app.use(json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});