import Buseta from '../models/buseta.js';

export const getBusetas = async (req, res) => {
    try {
        const busetas = await Buseta.find();
        res.status(200).json(busetas);
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
    const buseta = req.body;
    try {
        const buseta = await User.findOneAndUpdate(query, req.body);
        res.status(201).json(buseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteBuseta = async (req, res) => {
    const buseta = req.body;
    const newBuseta = new Buseta(buseta);
    try {
        await newBuseta.save();

        res.status(201).json(newBuseta);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}