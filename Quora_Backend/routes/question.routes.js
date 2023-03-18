const express = require("express");
const { getAllQuestions, createQuestion, giveAnswer, getQuestionById } = require("../controllers/question.controller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    try {
        let questions = await getAllQuestions();

        res.status(200).send({
            message: "Here are the questions",
            questions,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }

})

router.get("/:id", authMiddleware, async (req, res) => {
    try {
        let { id } = req.params;
        let question = await getQuestionById(id);

        res.status(200).send({
            message: "Question Fetched Successfully",
            question,
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
        let question = await createQuestion(req.body, currentUser);

        res.status(200).send({
            message: "Question Posted Successfully",
            question,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }

})


router.post("/:id/answer", authMiddleware, async (req, res) => {
    try {
        let { currentUser } = req;
        let { id } = req.params;
        let answer = await giveAnswer(req.body, id, currentUser);

        res.status(200).send({
            message: "Answer Posted Successfully",
            answer,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }

})

module.exports = router;