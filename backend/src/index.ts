import { Request, Response  } from 'express'

const { nanoid } = require("nanoid");
const express = require("express");
const mongoose = require("mongoose");

const { Location } = require("./models");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/locations", async (req: Request, res: Response) => {
  const allLocations = await Location.find();
  return res.status(200).json(allLocations);
});

app.get("/locations/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const location = await Location.findById(id);
  return res.status(200).json(location);
})

app.post("/locations", async (req: Request, res: Response) => {
  const newLocation = new Location({ "shortID": nanoid(5), ...req.body });
  const insertedLocation = await newLocation.save();
  return res.status(201).json(insertedLocation);
});

app.put("/locations/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await Location.updateOne({ _id: id }, req.body);
  const updatedLocation = await Location.findById(id);
  return res.status(200).json(updatedLocation);
})

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017"
    )
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();