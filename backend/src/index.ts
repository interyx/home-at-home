const dotenv = require('dotenv')
console.log(dotenv.config({path: './backend/src/.env'}));
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 4000;
const connection = process.env.DB_CONNECTION || ""

const start = async () => {
  try {
    await mongoose.connect(connection)
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();