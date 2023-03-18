const Post = require("../models/post.model");
const User = require("../models/user.model");

async function createPost({ title, body, image, topic }, author) {

    let user = await User.findById(author.id);

    let newPost = {
        title,
        body,
        image,
        topic,
        author: {
            userId: user._id,
            name: user.name,
            avatar: user.avatar,
        },
        upvotes: 0,
        downvotes: 0,
        comments: 0,
        shares: 0,
    }

    let post = await Post.create(newPost);

    return post;
}

async function getAllPosts() {
    let posts = await Post.find();
    return posts;
}


module.exports = { createPost, getAllPosts }