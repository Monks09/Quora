const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        image: { type: String, required: false },
        topic: { type: String, required: true },
        author: {
            userId: { type: String, required: true },
            name: { type: String, required: true },
            avatar: { type: String, required: false },
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

