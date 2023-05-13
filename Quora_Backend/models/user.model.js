const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: false },
        avatar: { type: String, required: false },
        following_topics: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            }
        ],
        following_spaces: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Space',
                required: true,
            }
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("User", UserSchema);

module.exports = User;

