const Post = require('../models/post');

async function addPost(req, res) {
    try {
        const post = new Post(req.body);
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getPostsBySender (req, res) {
    try {
        const posts = await Post.find({ sender: req.query.sender });
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updatePost(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addPost,
    getAllPosts,
    getPostById,
    getPostsBySender,
    updatePost,
}
