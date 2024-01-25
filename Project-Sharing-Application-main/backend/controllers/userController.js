const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    let result = await mongoose.model("users", userModel);
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
const login = async (req, res) => {
  try {
    let result = await mongoose.model("users", userModel);
    let data = await result.findOne(req.body);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = { signUp, login };
