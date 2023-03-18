const express = require("express");

const router = express.Router();

const { getAllUsers, registerUser, loginUser } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth");

router.get("/all", async (req, res) => {
    try {
        let users = await getAllUsers();

        res.status(200).send({
            message: "These are all the users",
            users,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})


router.post("/register", async (req, res) => {
    try {
        let user = await registerUser(req.body);

        res.status(200).send({
            message: "New User Registered Successfully",
            user,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})


router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let data = await loginUser(email, password);

        res.status(200).send({
            message: "Login Successful",
            data,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})


router.get("/getCurrentUser", authMiddleware, async (req, res) => {
    try {
        const { currentUser } = req;

        res.status(200).send({
            message: "This user sent the request",
            user: currentUser,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})




module.exports = router;