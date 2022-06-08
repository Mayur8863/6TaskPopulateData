const express = require("express");
const bodyParser = require('body-parser')
const app  = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const userRegister = require("./routes/userRegister")
app.use("/user/register",userRegister);
const userBlog = require("./routes/userBlog")
app.use("/user/blog",userBlog);

module.exports = app;