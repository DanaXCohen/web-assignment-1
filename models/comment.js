const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: mongoose.Schema.Types.ObjectId,
    content: String,
    author: String
});

module.exports = mongoose.model('Comment', CommentSchema);
