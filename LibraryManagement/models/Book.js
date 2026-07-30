const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    category: {
        type: String
    },

    price: {
        type: Number
    },

    available: {
        type: Number,
        required: true,
        default:0
    }

}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);