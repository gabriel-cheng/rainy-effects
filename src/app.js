import express from "express";
import { engine } from "express-handlebars";
import index_route from "./routes/index_route.js";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views/'));


app.use("/", index_route.home_router);

export default app;