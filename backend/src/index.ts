const mongoose = require('mongoose')
const app = require('./app')
const port = 4000;

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017")
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();