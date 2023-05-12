const Post = require("../models/post.model");
const User = require("../models/user.model");

async function createPost({ body, image, topic }, author) {

    let user = await User.findById(author.id);

    let newPost = {
        body,
        image,
        topic,
        author: {
            userId: user._id,
            name: user.name,
            avatar: user.avatar,
        },
        views: 1,
        upvotes: 0,
        downvotes: 0,
        comments: 0,
        shares: 0,
    }

    let post = await Post.create(newPost);

    return post;
}

async function getAllPosts(limit, offset) {
    let posts = Post.find().skip(offset).limit(limit);
    return posts;
}


module.exports = { createPost, getAllPosts }