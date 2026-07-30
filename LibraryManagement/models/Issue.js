const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
    issueId: {
        type: String,
        required: true,
        unique: true
    },
    bookId: {
        type: String,
        required: true
    },
    memberId: {
        type: String,
        required: true
    },
    issueDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Issued", "Returned"],
        default: "Issued"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Issue", IssueSchema);