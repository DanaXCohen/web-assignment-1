import express from "express";
const router = express.Router();

import {
    getAllComments,
    getCommentsByPostId,
    addComment,
    updateComment,
    deleteComment,
} from "../controllers/comments_controller"; // Ensure your controller has appropriate TypeScript typings

router.get("/", (req, res) => getAllComments(req, res));

router.get("/:postId", (req, res) => getCommentsByPostId(req, res));

router.post("/", (req, res) => addComment(req, res));

router.put("/:id", (req, res) => updateComment(req, res));

router.delete("/:id", (req, res) => deleteComment(req, res));

export default router;
