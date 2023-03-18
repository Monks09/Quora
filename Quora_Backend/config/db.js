const mongoose = require("mongoose");

const configs = require("./configs");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(configs.CONNECTION_URL);
        console.log("Connected to db");
    }
    catch (err) {
        console.log("Connection failed");
    }

}

module.exports = connectToDatabase;