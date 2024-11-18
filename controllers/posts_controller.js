const PostModel = require("../models/posts_model");
const { StatusCodes } = require("http-status-codes");

const createPost = async (req, res) => {
    const postBody = req.body;
    try {
        const post = await PostModel.create(postBody);
        res.status(StatusCodes.CREATED).send(post);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
};

const getAllPosts = async (req, res) => {
    const filter = req.query.sender;
    try {
        if (filter) {
            const posts = await PostModel.find({ sender: filter });
            res.send(posts);
        } else {
            const posts = await PostModel.find();
            res.send(posts);
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
};

const getPostById = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await PostModel.findById(postId);
        if (post) {
            res.send(post);
        } else {
            res.status(StatusCodes.NOT_FOUND).send("Post not found");
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
};

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;

    try {
        const post = await PostModel.findByIdAndUpdate(postId, { title, content }, { new: true, runValidators: true });
        if (post) {
            res.send(post);
        } else {
            res.status(StatusCodes.NOT_FOUND).send("Post not found");
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
};