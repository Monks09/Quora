const Answer = require("../models/answer.model");

async function getContent() {
    let answers = Answer.find();
    return answers;
}

module.exports = { getContent }