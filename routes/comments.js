const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments-controller');

router.post('/addComment', commentsController.addComment);
router.get('/getAll', commentsController.getAllComments);
router.get('/:postId', commentsController.getCommentsByPostId);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;
