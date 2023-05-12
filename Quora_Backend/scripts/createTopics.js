const connectToDatabase = require("../config/db");
const Topic = require("../models/topic.model")

let topics = [
    {
        name: "Science"
    },
    {
        name: "Health"
    },
    {
        name: "Movies"
    },
    {
        name: "Entertainment"
    },
    {
        name: "Technology"
    },
    {
        name: "Sports"
    },
]

async function createTopics() {
    await Topic.create(topics);
    console.log(topics.length, "topics created");
}

connectToDatabase()
    .then(createTopics)