const express = require("express")
const locations = require("./routes/locations")
const spaces = require("./routes/spaces")
const app = express()

app.use(express.json())
// app -> router -> controller -> service
app.use('/locations', locations)
app.use('/spaces', spaces)
module.exports = app