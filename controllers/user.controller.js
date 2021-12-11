const db = require("../models")
const User = db.user

// Create and Save a new User
exports.create = async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            role: req.body.role
        })
        await User.create(user, function (err, user) {
            if (err) {
                return res.status(500).send({message: "Error during creation of user", user: null})
            }
            return res.status(200).send({message: "User was created", user: user})
        })
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
    try {
        await User.find({}, function (err, users) {
            if (err) {
                return res.status(500).send({message: "Error during creation of user", user: null})
            }
            return res.status(200).send({message: "Found"}, users)
        })
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Find a single User with an id
exports.findOneById = async (req, res) => {
    try {
        await User.findOne({_id: req.id}, function (err, user) {
            if (err) {
                return res.status(500).send({message: "Error during creation of user", user: null})
            }
            if (!user) {
                return res.status(404).send({message: "User not found", user: null})
            }
            return res.status(200).send({message: "Found", user: user})
        })
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Update a User by the id in the request
exports.update = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

