const express = require("express");
const router = express.Router();

const librarianController = require("../controllers/librarianController");

router.post("/", librarianController.createLibrarian);

router.get("/", librarianController.getAllLibrarians);

router.get("/:librarianId", librarianController.getLibrarianById);

router.put("/:librarianId", librarianController.updateLibrarian);

router.delete("/:librarianId", librarianController.deleteLibrarian);

module.exports = router;