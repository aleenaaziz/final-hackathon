const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle: {type: String},
    developerName: {type: String},
    description: {type: String},
    hostedURL: {type: String},
})

module.exports = projectSchema;