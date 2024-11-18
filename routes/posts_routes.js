const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts_controller");

router.get("/", postController.getAllPosts);

router.get("/:id", postController.getPostById);

router.post("/", postController.createPost);

router.put("/:id", postController.updatePost);

module.exports = router;