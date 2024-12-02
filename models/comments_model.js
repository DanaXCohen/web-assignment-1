const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: {
        type: String,
        required: true,
    },
    content: String,
    author: {
        type: String,
        required: true,
    },
});

const Comments = mongoose.model("Comment", CommentSchema);
module.exports = Comments;
