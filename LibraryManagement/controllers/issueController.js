const Issue = require("../models/Issue");

// Create Issue
exports.createIssue = async (req, res) => {
    try {
        const issue = await Issue.create(req.body);
        res.status(201).json(issue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Issues
exports.getAllIssues = async (req, res) => {
    try {
        const issues = await Issue.find();
        res.status(200).json(issues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Issue by issueId
exports.getIssueById = async (req, res) => {
    try {
        const issue = await Issue.findOne({ issueId: req.params.issueId });

        if (!issue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json(issue);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Issue
exports.updateIssue = async (req, res) => {
    try {
        const issue = await Issue.findOneAndUpdate(
            { issueId: req.params.issueId },
            req.body,
            { new: true }
        );

        if (!issue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json(issue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete Issue
exports.deleteIssue = async (req, res) => {
    try {
        const issue = await Issue.findOneAndDelete({
            issueId: req.params.issueId,
        });

        if (!issue) {
            return res.status(404).json({ message: "Issue not found" });
        }

        res.status(200).json({ message: "Issue deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};