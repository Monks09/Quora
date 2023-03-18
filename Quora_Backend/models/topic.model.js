const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;

