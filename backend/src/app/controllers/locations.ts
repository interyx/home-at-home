import { Request, Response } from 'express'
import { LocationData } from 'inventory-types';
const asyncHandler = require("express-async-handler")

const { allLocations, locationById, addLocation, removeLocationById, updateLocationById } = require('../services/locations')

exports.getAllLocations = asyncHandler(async (req: Request, res: Response) => {
    try {
        const locations = await allLocations();
        return res.status(200).json(locations);
    }
    catch (err) {
        return res.status(500).send(err);
    }
})

exports.getLocationById = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const location = await locationById(id)
        return res.status(200).json(location);
    }
    catch (err) {
        return res.status(500).send(err);
    }
})

exports.addNewLocation = asyncHandler(async (req: Request, res: Response) => {
    try {
        const newLocation = {
            name: req.body.name,
            address: typeof req.body.address === "string" ? req.body.address : "",
            description: typeof req.body.description === "string" ? req.body.description : ""
        } as LocationData
        const response = await addLocation(newLocation);
        return res.status(201).json(response);
    } catch (err) {
        return res.status(500).send(err);
    }
})

exports.deleteLocation = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await removeLocationById(id);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).send(err);
    }
})

exports.updateLocation = asyncHandler(async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedLocation = {
            name: req.body.name,
            address: typeof req.body.address === "string" ? req.body.address : "",
            description: typeof req.body.description === "string" ? req.body.description : ""
        }
        const response = await updateLocationById(id, updatedLocation)
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).send(err);
    }
})