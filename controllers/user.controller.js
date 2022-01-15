const db = require("../models")
const User = db.user
const bcrypt = require("../services/encryption.service")

// Create and Save a new User
exports.create = async (req, res) => {
    try {
        let password = await bcrypt.cryptPassword(req.body.password)
        const user = new User({
            email: req.body.email,
            password: password,
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
