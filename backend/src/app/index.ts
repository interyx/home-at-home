const express = require("express")
const locations = require("./routes/locations")
const app = express()

app.use(express.json())
// app -> router -> controller -> service
app.use('/locations', locations)
module.exports = app