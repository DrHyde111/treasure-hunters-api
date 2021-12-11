const db = require("../models")
const User = db.user

// Create and Save a new Tutorial
exports.create = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Find a single User with an id
exports.findOne = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Update a User by the id in the request
exports.update = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    try{

    }catch (error){
        return res.status(500).send({message: "Something went wrong."})
    }
};

