import { Request, Response, NextFunction } from 'express'

const express = require("express");
const mongoose = require("mongoose");

const { Home } = require("./models");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/homes", async (req: Request, res: Response) => {
  const allHomes = await Home.find();
  return res.status(200).json(allHomes);
});

app.get("/homes/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const home = await Home.findById(id);
  return res.status(200).json(home);
})

app.post("/homes", async (req: Request, res: Response) => {
  const newHome = new Home({ ...req.body });
  const insertedHome = await newHome.save();
  return res.status(201).json(insertedHome);
});

app.put("/homes/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await Home.updateOne({ _id: id }, req.body);
  const updatedHome = await Home.findById(id);
  return res.status(200).json(updatedHome);
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