const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Crud_Faculty")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Import Routes
const facultyRoutes = require("./routes");

// Use Routes
app.use("/", facultyRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});