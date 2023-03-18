const express = require("express");
const cors = require('cors');
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const questionRouter = require("./routes/question.routes");
const contentRouter = require("./routes/content.router");


const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.use("/posts", postRouter);

app.use("/questions", questionRouter);

app.use("/content", contentRouter);


app.get("/", async (req, res) => {
    res.status(200).send("Welcome to Quora");
})


connectToDatabase()
    .then(() => {
        app.listen(8080, () => {
            console.log("Server is running at http://localhost:8080");
        })
    })