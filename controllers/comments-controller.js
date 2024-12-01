const Comment = require('../models/comment-model');

exports.addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(404).send('Comment not found');
        }
        res.send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.send({ message: 'Comment deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};
