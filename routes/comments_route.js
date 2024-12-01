const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comments_controller");

router.get("/", commentsController.getAllComments);

router.get("/:postId", commentsController.getCommentsByPostId);

router.post("/", commentsController.addComment);

router.put("/:id", commentsController.updateComment);

router.delete("/:id", commentsController.deleteComment);

module.exports = router;
