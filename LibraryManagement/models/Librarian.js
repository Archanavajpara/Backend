const mongoose = require("mongoose");

const LibrarianSchema = new mongoose.Schema({
    librarianId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Librarian", LibrarianSchema);