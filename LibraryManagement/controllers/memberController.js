const Member = require("../models/Member");

// Create Member
exports.createMember = async (req, res) => {

    try {

        const member = await Member.create(req.body);

        res.status(201).json(member);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Get Members
exports.getMembers = async (req, res) => {

    try {

        const members = await Member.find();

        res.json(members);

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};

// Delete Member
exports.deleteMember = async (req, res) => {

    try {

        await Member.findByIdAndDelete(req.params.id);

        res.json({ message: "Member deleted successfully" });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

};