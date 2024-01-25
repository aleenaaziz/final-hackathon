const express = require("express");
const { addProject, getProject } = require("../controllers/projectsController");
const router = express.Router();

router.route("/addProject").post(addProject);
router.route("/getProject").get(getProject);

module.exports = router;
