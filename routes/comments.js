const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.post('/comment', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.send(comment);
});

router.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.send(comments);
});

router.get('/comments/:postId', async (req, res) => {
    const comments = await Comment.find({ postId: req.params.postId });
    res.send(comments);
});

router.put('/comment/:id', async (req, res) => {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(comment);
});

router.delete('/comment/:id', async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.send({ message: 'Comment deleted' });
});

module.exports = router;
