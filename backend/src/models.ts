const mongoose = require("mongoose");
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
  containers: {
    type: Array,
    required: false,
  },
  items: {
    type: Array,
    required: false,
  }
})

const containerSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  containers: [{ type: this, default: undefined }],
  items: [{ type: Schema.Types.ObjectId, ref: 'Item', default: undefined }],
})

const itemSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false }
})

const Home = mongoose.model("Home", homeSchema);
const Item = mongoose.model("Item", itemSchema);
const Container = mongoose.model('Container', containerSchema);

module.exports = { Home, Item, Container };