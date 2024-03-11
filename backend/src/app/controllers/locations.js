const { allLocations, locationById } = require('../services/locations')

async function getAllLocations (req, res) {
    try {
        const allFoundLocations = await allLocations;
        return res.status(200).json(allFoundLocations);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

async function getLocationById(req, res) {
    try {
        const {id} = req.params;
        console.log(id);
        // const location = await locationById(id)
        // return res.status(200).json(location);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export { getAllLocations, getLocationById }