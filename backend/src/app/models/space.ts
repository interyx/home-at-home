import { Schema } from "mongoose"
const mongoose = require("mongoose")

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  shortId: { type: String, required: true },
  location: { type: Schema.Types.ObjectId, ref: "Location", required: true },
  parent: { type: this, default: undefined },
});

const Space = mongoose.model("Space", spaceSchema)
module.exports = { Space }