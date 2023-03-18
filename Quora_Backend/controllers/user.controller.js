const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const configs = require("../config/configs");

function generateToken(user) {
    let payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
    }

    const token = jwt.sign(payload, configs.JWT_SECRET_KEY);
    return token;
}

function verifyToken(token) {
    let user = jwt.verify(token, configs.JWT_SECRET_KEY);
    return user;
}

async function getAllUsers() {
    let users = await User.find();
    return users;
}

async function registerUser(userDetails) {

    let { email } = userDetails;
    let alreadyExists = await User.findOne({ email });

    if (alreadyExists) {
        throw new Error("User already exists");
    }

    let user = await User.create(userDetails);
    user = user.toJSON();
    delete user.password;

    return user;
}

async function loginUser(email, password) {
    let user = await User.findOne({ email });

    if (user) {
        if (password === user.password) {
            user = user.toJSON();
            delete user.password;
            return {
                token: generateToken(user),
                user,
            }

        } else {
            throw new Error("Password is incorrect");
        }

    } else {
        throw new Error("User does not exist");
    }

}


module.exports = { getAllUsers, registerUser, loginUser, verifyToken }