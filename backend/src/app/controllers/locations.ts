import { Request, Response } from 'express'
const asyncHandler = require("express-async-handler")

const { allLocations, locationById } = require('../services/locations')

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
