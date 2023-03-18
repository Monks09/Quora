const configs = require("../config/configs");
const { verifyToken } = require("../controllers/user.controller");


function authMiddleware(req, res, next) {
    try {
        let authHeader = req.headers.authorization;
        if (authHeader) {
            let token = authHeader.split(' ').pop();
            let user = verifyToken(token);
            req.currentUser = user;
            next();

        } else {
            res.status(400).send({
                error: "User is not logged in"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({
            error: "Authentication failed"
        })
    }
}

module.exports = authMiddleware;