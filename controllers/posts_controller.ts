import { Request, Response } from "express";
import PostModel from "../models/posts_model";
import { StatusCodes } from "http-status-codes";

export const createPost = async (req: Request, res: Response): Promise<void> => {
    const postBody = req.body;
    try {
        const post = await PostModel.create(postBody);
        res.status(StatusCodes.CREATED).send(post);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
    const filter = req.query.sender as string | undefined;

    try {
        if (filter) {
            const posts = await PostModel.find({ sender: filter });
            res.send(posts);
        } else {
            const posts = await PostModel.find();
            res.send(posts);
        }
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

export const getPostById = async (req: Request, res: Response): Promise<void> => {
    const postId = req.params.id;

    try {
        const post = await PostModel.findById(postId);
        if (post) {
            res.send(post);
        } else {
            res.status(StatusCodes.NOT_FOUND).send("Post not found");
        }
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
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
        if (error.name === "ValidationError") {
            res.status(StatusCodes.BAD_REQUEST).send({ error: "Validation error", details: error.message });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: "Server error", details: error.message });
        }
    }
};
