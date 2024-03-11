import "./loadEnvironment"
const mongoose = require('mongoose')
const app = require('../app')
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION)
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();