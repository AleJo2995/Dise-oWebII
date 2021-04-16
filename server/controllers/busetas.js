import Buseta from '../models/buseta.js';

export const getBusetas = async (req, res) => {
    try {
        const busetas = await Buseta.find({}, { _id: 0 });
        res.status(200).json(busetas);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getAvailableSpacesByBusetaCode = async (req, res) => {
    const code = req.params.code;
    try {
        const availableSpaces = await Buseta.findOne({code: code}, { _id: 0 }).select('spacesAvailable');
        res.status(200).json(availableSpaces);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createBuseta = async (req, res) => {
    const buseta = req.body;
    const newBuseta = new Buseta(buseta);
    try {
        await newBuseta.save();

        res.status(201).json(newBuseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const editBuseta = async (req, res) => {
    const query = {'code': req.params.code};
    try {
        const buseta = await Buseta.findOneAndUpdate(query, req.body);
        res.status(201).json(buseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteBuseta = async (req, res) => {
    const query = {'code': req.params.code};
    try {
        const buseta = await Buseta.deleteOne(query);

        res.status(201).json(buseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const saveASeat = async (req, res) => {
    const query = {'code': req.params.code};
    try {
        const buseta = await Buseta.findOneAndUpdate(query, req.body);
        res.status(200).json(buseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}