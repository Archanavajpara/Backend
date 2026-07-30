const express = require("express");
const router = express.Router();

const issueController = require("../controllers/issueController");

router.post("/", issueController.createIssue);

router.get("/", issueController.getAllIssues);

router.get("/:issueId", issueController.getIssueById);

router.put("/:issueId", issueController.updateIssue);

router.delete("/:issueId", issueController.deleteIssue);

module.exports = router;