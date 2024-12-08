import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
    title: string;
    content?: string;
    sender: string;
}

const postsSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    sender: {
        type: String,
        required: true,
    },
});

const Posts = mongoose.model<IPost>("Posts", postsSchema);
export default Posts;
