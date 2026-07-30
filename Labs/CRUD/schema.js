const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Faculty", facultySchema);