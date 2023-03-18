const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        topic: { type: String, required: true },
        author: {
            userId: { type: String, required: true },
            name: { type: String, required: true },
            avatar: { type: String, required: false },
        },
        no_of_answers: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;

