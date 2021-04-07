import "reflect-metadata";
import express from 'express';
import 'express-async-errors';

import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from   "./swagger.json";
import "./database";
import "./shared/container";
import { resolveError } from "./middlewares/resolveError";

const app = express();

app.use(express.json());
 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use(resolveError);

app.listen(3333, () => console.debug("Server running!"))