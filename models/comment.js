const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: mongoose.Schema.Types.ObjectId,
    content: String,
    author: String
});

const Comments = mongoose.model('Comment', CommentSchema);
module.exports = Comments;
