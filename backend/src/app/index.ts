const express = require("express")
const locations = require('./routes/locations')
const app = express()
// app -> router -> controller -> service
app.use('/locations', locations)
module.exports = app