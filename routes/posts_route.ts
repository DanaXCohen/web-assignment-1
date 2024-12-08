import express from "express";
const router = express.Router();

import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
} from "../controllers/posts_controller";

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", createPost);

router.put("/:id", updatePost);

export default router;
