const { default: mongoose } = require("mongoose");
const projectSchema = require("../models/projectsModel");

const addProject = async (req, res) => {
  try {
    let result = await mongoose.model("projects", projectSchema);
    let data = await result.create(req.body);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {
    res.send({ error: err });
  }
};

const getProject = async (req, res) => {
  try {
    let result = await mongoose.model("projects", projectSchema);
    let data = await result.find();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { addProject, getProject };
