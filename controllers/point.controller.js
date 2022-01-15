const db = require("../models")
const Point = db.point
const Game = db.game

// Create and Save a new Point
exports.create = async (req, res) => {
    try {
        const game = await Game.findOne({_id: req.params.id})
        console.log(game)
        if (!game) {
            return res.status(404).send({message: "Game doesnt exist!"})
        }
        let point = new Point({
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            index: req.body.index,
        })
        console.log(point)
        game.points.push(point);
        console.log(game)
        const result = await game.save();
        console.log(result)
        return res.status(200).send({message: "Point was added"})
    } catch (error) {
        return res.status(500).send({message: "Something went 1231wrong."})
    }
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
    try {
        let users = await User.find({});
        return res.status(200).send({message: "Found", users})

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Find a single User with an id
exports.findOneById = async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.id})
        return res.status(200).send({message: "Found", user: user})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate({_id: req.params.id}, req.body);
        return res.status(200).send({message: "User updated", user: user})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete a User with the specified id in the request
exports.deleteById = async (req, res) => {
    try {
        let result = await User.deleteOne({_id: req.params.id});
        return res.status(200).send({message: "User was deleted"})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete all users
exports.deleteAll = async (req, res) => {
    try {
        let result = await User.remove({})
        return res.status(200).send({message: "Users were deleted"})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};
