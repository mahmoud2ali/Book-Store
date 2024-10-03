const { default: mongoose } = require("mongoose");
const Book = require("../models/bookModel");

const express = require("express")
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'send all required fields : title, authuor, publishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }
    catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
})


router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).send(books)
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
})



router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.find({ _id: id });
        return res.status(200).send(book)
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
})



router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'send all required fields : title, authuor, publishYear',
            });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).send("Book not found");
        }
        return res.status(201).send("Book updated successfully.");

    }
    catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id)
        if(!result)
        {
            return res.status(404).send("Book not found");
        }
        return res.status(200).send("Book deleted successfully.");
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
})


module.exports = router;