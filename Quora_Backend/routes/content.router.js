const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { getContent } = require("../controllers/content.controller");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 3;
        const offset = (page - 1) * limit;

        let content = await getContent(limit, offset);
        res.status(200).send({
            message: "Here is your content",
            content,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }

})


module.exports = router;