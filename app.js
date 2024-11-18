const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT;

const posts_routes = require("./routes/posts_routes")
app.use("/posts", posts_routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});