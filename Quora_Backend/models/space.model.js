const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        followers: { type: String, required: true },
        titles: { type: String, required: true },

    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Space = mongoose.model('Space', SpaceSchema);

module.exports = Space;