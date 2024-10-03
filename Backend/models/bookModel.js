const mongoose = require("mongoose");

const bookShema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
)

const Book = mongoose.model("books", bookShema);
module.exports = Book;