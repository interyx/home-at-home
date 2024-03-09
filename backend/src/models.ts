import mongoose from "mongoose";
const { Schema } = mongoose;

const homeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  spaces: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    required: false,
  },
});

const spaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  items: [{ type: Schema.Types.ObjectId, ref: "Item", default: undefined }],
});

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
  items: [{ type: this, default: undefined }],
});

const Home = mongoose.model("Home", homeSchema);
const Item = mongoose.model("Item", itemSchema);
const Space = mongoose.model("Space", spaceSchema);

module.exports = { Home, Item, Space };
