const Space = require("../models/space.model")

const getSpaces = async () => {
    let spaces = await Space.find();
    return spaces;
}


module.exports = { getSpaces }