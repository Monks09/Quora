const express = require("express");
const cors = require('cors');
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const questionRouter = require("./routes/question.routes");
const followingRouter = require("./routes/following.routes");
const PORT = process.env.PORT || 3030;


const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.use("/posts", postRouter);

app.use("/questions", questionRouter);

app.use("/following", followingRouter);


app.get("/", async (req, res) => {
    res.status(200).send("Welcome to Quora");
})


connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    })