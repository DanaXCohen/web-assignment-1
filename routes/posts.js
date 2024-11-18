const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/post', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
});

router.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

router.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.send(post);
});

router.get('/post', async (req, res) => {
    const posts = await Post.find({ sender: req.query.sender });
    res.send(posts);
});

router.put('/post/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(post);
});

module.exports = router;
