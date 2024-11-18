const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts_controller");

router.get("/", postController.getAllPosts);

router.post("/", postController.createPost);

// router.put("/:id", (req,res)=>{
//     res.send("update a post");
// });

router.delete("/", postController.deletePost);

module.exports = router;