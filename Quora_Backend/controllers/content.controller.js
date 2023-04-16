const Answer = require("../models/answer.model");

async function getContent(limit, offset) {
    let answers = Answer.find().skip(offset).limit(limit);
    return answers;
}

module.exports = { getContent }