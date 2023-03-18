const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
    {
        body: { type: String, required: true },
        image: { type: String, required: false },
        author: {
            userId: { type: String, required: true },
            name: { type: String, required: true },
            avatar: { type: String, required: false },
        },
        question: {
            quesId: { type: String, required: true },
            title: { type: String, required: true },
            topic: { type: String, required: true },
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

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;

