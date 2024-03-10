const { allLocations } = require('../services/locations')

async function getAllLocations (req, res) {
    try {
        const allFoundLocations = await allLocations;
        return res.status(200).json(allFoundLocations);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export { getAllLocations }