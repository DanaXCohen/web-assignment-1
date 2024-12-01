const express = require('express')
const app = express();
require("dotenv").config();
const commentRoutes = require('./routes/comments');
const postsRoutes = require("./routes/posts_routes");
const port = process.env.PORT;
const bodyParser = require("body-parser");

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CONNECT);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "conenction error:"));

db.once("open", () => {
    console.log("Connected to the database");
})
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/posts", postsRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
