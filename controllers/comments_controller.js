const Comment = require("../models/comments_model");
const { StatusCodes } = require("http-status-codes");


const addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.send(comment);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
    }
};

const getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.send(comments);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!comment) {
            return res.status(StatusCodes.NOT_FOUND).send("Comment not found");
        }
        res.send(comment);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

const deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.send({ message: "Comment deleted" });
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

module.exports = {
    addComment,
    getAllComments,
    getCommentsByPostId,
    updateComment,
    deleteComment,
};
