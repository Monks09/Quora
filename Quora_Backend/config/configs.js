const dotenv = require("dotenv");
dotenv.config();

const configs = {
    CONNECTION_URL: process.env.CONNECTION_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}

module.exports = configs;