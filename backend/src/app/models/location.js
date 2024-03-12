const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: false },
    description: { type: String, required: false },
    shortID: {type: String, required: true, index: true}
});

const Location = mongoose.model("Location", locationSchema);

module.exports = { Location };
