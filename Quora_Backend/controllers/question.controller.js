const Answer = require("../models/answer.model");
const Question = require("../models/question.model");
const User = require("../models/user.model");

async function getAllQuestions() {
    let questions = await Question.find();
    return questions;
}

async function createQuestion({ title, topic }, author) {

    let newQuestion = {
        title,
        topic,
        author: {
            userId: author.id,
            name: author.name,
            avatar: author.avatar,
        },
        no_of_answers: 0,
    }

    let question = await Question.create(newQuestion);
    return question;

}


async function giveAnswer({ body, image }, id, author) {

    let question = await Question.findById(id);

    let updateData = {
        no_of_answers: question.no_of_answers + 1
    }

    await Question.findByIdAndUpdate(id, updateData, { new: true });

    let newAnswer = {
        body,
        image,
        question: {
            quesId: question._id,
            title: question.title,
            topic: question.topic,
        },
        author: {
            userId: author.id,
            name: author.name,
            avatar: author.avatar,
        },
        views: 1,
        upvotes: 0,
        downvotes: 0,
        comments: 0,
        shares: 0,
    }

    let answer = await Answer.create(newAnswer);
    return answer;
}

async function getQuestionById(id) {
    let question = await Question.findById(id);
    return question;
}

async function getAnswersforQuestion(id) {
    let answers = await Answer.find({ "question.quesId": id });
    return answers;
}


module.exports = { getAllQuestions, createQuestion, giveAnswer, getQuestionById, getAnswersforQuestion }