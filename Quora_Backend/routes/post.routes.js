const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { createPost, getAllPosts } = require("../controllers/post.controller");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    try {
        let posts = await getAllPosts();

        res.status(200).send({
            message: "Here are the posts",
            posts,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }


})

router.post("/create", authMiddleware, async (req, res) => {
    try {
        let { currentUser } = req;
        let post = await createPost(req.body, currentUser);

        res.status(200).send({
            message: "Post Created Sucessfully",
            post,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})



module.exports = router;