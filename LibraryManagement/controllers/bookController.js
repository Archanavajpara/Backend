const Book = require("../models/Book");

// Create Book
exports.createBook = async (req, res) => {

    try {

        const book = await Book.create(req.body);

        res.status(201).json(book);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Get All Books
exports.getBooks = async (req, res) => {

    try {

        const books = await Book.find();

        res.json(books);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Get Book by ID
exports.getBook = async (req, res) => {
    
    try {

        const book = await Book.findOne({ bookId: req.params.id });

        if (!book)
            return res.status(404).json({ message: "Book not found" });

        res.json(book);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Update Book
exports.updateBook = async (req, res) => {

    try {

        const book = await Book.findByIdAndUpdate(
            {bookId:req.params.id},
            req.body,
            { new: true }
        );

        res.json(book);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Delete Book
exports.deleteBook = async (req, res) => {

    try {

        await Book.findByIdAndDelete({ bookId: req.params.id });

        res.json({ message: "Book deleted successfully" });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};