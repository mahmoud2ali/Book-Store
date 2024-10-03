const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./router/booksRouter");
const cors = require("cors")

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/bookStore")
    .then(() => {
        console.log("Database conected...\n");
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })

    }).catch((err) => {
        console.log(err);
    }
    )


app.use("/books", bookRouter)