const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post-controller');

router.post('/post', postsController.addPost);
router.get('/posts', postsController.getAllPosts);
router.get('/post/:id', postsController.getPostById);
router.get('/post', postsController.getPostsBySender);
router.put('/post/:id', postsController.updatePost);

module.exports = router;
