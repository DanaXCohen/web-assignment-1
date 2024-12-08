import { setupSwagger } from './swagger';
import express, { Application } from "express";
import { config } from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import bodyParser from "body-parser";
import commentRoutes from "./routes/comments_route";
import postsRoutes from "./routes/posts_route";

config();
const app: Application = express();

const port: string | undefined = process.env.PORT;
// Mongoose connection

mongoose.connect(process.env.DB_CONNECT as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("Connected to the database");
});
// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use("/posts", postsRoutes);

app.use("/comments", commentRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
setupSwagger(app);
