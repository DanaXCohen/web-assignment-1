import { Request, Response } from "express";
import Comment from "../models/comments_model";
import { StatusCodes } from "http-status-codes";

export const addComment = async (req: Request, res: Response): Promise<void> => {
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

export const getAllComments = async (req: Request, res: Response): Promise<void> => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
    }
};

export const getCommentsByPostId = async (req: Request, res: Response): Promise<void> => {
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

export const updateComment = async (req: Request, res: Response): Promise<void> => {
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

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
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

export default {
    addComment,
    getAllComments,
    getCommentsByPostId,
    updateComment,
    deleteComment,
};
