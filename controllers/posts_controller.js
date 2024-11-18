const express = require("express");
const router = express.Router();

const getAllPosts = (req, res) => {
    res.send("get all posts");
};

const createPost = (req, res) => {
    res.send("create a post");
};

const deletePost = (req, res) => {
    res.send("delete a post");
};

module.exports = {
    getAllPosts,
    createPost,
    deletePost
};