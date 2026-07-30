// create routes for faculty using restful crud operations
const express = require('express');
const app = express();

// create a faculty
app.post('/faculty', (req, res) => {
    console.log("Creating a new faculty");
    res.status(201).json({ message: 'Faculty created successfully' });
});

// get all faculties
app.get('/faculty', (req, res) => {
    console.log("Getting all faculties");
    res.status(200).json({ message: 'List of all faculties' });
});

// get a specific faculty by id
app.get('/faculty/:id', (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Getting details of faculty with id ${id}`);
        res.status(200).json({ message: `Details of faculty with id ${id}` });
    }
    catch (error) {
        console.log(`Error fetching faculty with id ${id}: ${error.message}`);
        res.status(500).json({ message: `Error fetching faculty with id ${id}` });
    }
});

// update a specific faculty by id
app.patch('/faculty/:id', (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Updating faculty with id ${id}`);
        res.status(200).json({ message: `Faculty with id ${id} updated successfully` });
    }
    catch (error) {
        console.log(`Error updating faculty with id ${id}: ${error.message}`);
        res.status(500).json({ message: `Error updating faculty with id ${id}` });
    }
});

// delete a specific faculty by id
app.delete('/faculty/:id', (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Deleting faculty with id ${id}`);
        res.status(200).json({ message: `Faculty with id ${id} deleted successfully` });
    } 
    catch (error) {
        console.log(`Error deleting faculty with id ${id}: ${error.message}`);
        res.status(500).json({ message: `Error deleting faculty with id ${id}` });
    }
});

module.exports = app;
