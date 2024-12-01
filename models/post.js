const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    sender: String
});

module.exports = mongoose.model('Post', PostSchema);
