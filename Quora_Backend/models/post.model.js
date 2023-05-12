const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        body: { type: String, required: true },
        image: { type: String, required: false },
        topic: { type: String, required: false },
        author: {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            name: { type: String, required: true },
            avatar: { type: String, required: false },
        },
        question: {
            quesId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
            },
            title: { type: String },
            topic: { type: String },
        },
        views: { type: Number, required: true },
        upvotes: { type: Number, required: true },
        downvotes: { type: Number, required: true },
        comments: { type: Number, required: true },
        shares: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

