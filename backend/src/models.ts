const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: false },
  description: { type: String, required: false },
  shortID: {type: String, required: true}
});

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  shortId: { type: String, required: true },
  home: { type: Schema.Types.ObjectId, ref: "Location" },
  parent: { type: this, default: undefined },
});

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  shortId: { type: String, required: true },
  location: { type: Schema.Types.ObjectId, ref: "Space" },
  parent: { type: this, default: undefined },
  isContainer: { type: Boolean, required: true },
});

const Location = mongoose.model("Location", locationSchema);
const Item = mongoose.model("Item", itemSchema);
const Space = mongoose.model("Space", spaceSchema);

module.exports = { Location, Item, Space };
