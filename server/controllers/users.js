import User from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const editUser = async (req, res) => {
    const query = {'code': req.params.code};
    try {
        const user = await User.findOneAndUpdate(query, req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    const query = {'code': req.params.code};
    try {
        const user = await User.deleteOne(query);
        res.status(201).json(user);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}