const Librarian = require("../models/Librarian");

// Create Librarian
exports.createLibrarian = async (req, res) => {
    try {
        const librarian = await Librarian.create(req.body);
        res.status(201).json(librarian);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get All Librarians
exports.getAllLibrarians = async (req, res) => {
    try {
        const librarians = await Librarian.find();
        res.status(200).json(librarians);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Librarian by librarianId
exports.getLibrarianById = async (req, res) => {
    try {
        const librarian = await Librarian.findOne({
            librarianId: req.params.librarianId,
        });

        if (!librarian) {
            return res.status(404).json({ message: "Librarian not found" });
        }

        res.status(200).json(librarian);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Librarian
exports.updateLibrarian = async (req, res) => {
    try {
        const librarian = await Librarian.findOneAndUpdate(
            { librarianId: req.params.librarianId },
            req.body,
            { new: true }
        );

        if (!librarian) {
            return res.status(404).json({ message: "Librarian not found" });
        }

        res.status(200).json(librarian);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete Librarian
exports.deleteLibrarian = async (req, res) => {
    try {
        const librarian = await Librarian.findOneAndDelete({
            librarianId: req.params.librarianId,
        });

        if (!librarian) {
            return res.status(404).json({ message: "Librarian not found" });
        }

        res.status(200).json({ message: "Librarian deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};