import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
    postId: string;
    content?: string;
    author: string;
}

const CommentSchema: Schema = new Schema({
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

const Comments = mongoose.model<IComment>("Comment", CommentSchema);
export default Comments;
