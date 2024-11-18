const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments-controller');

router.post('/comment', commentsController.addComment);
router.get('/comments', commentsController.getAllComments);
router.get('/comments/:postId', commentsController.getCommentsByPostId);
router.put('/comment/:id', commentsController.updateComment);
router.delete('/comment/:id', commentsController.deleteComment);

module.exports = router;
