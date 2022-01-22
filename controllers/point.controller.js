const db = require("../models")
const Point = db.point
const Game = db.game

// Create and Save a new Point
exports.create = async (req, res) => {
    try {
        const game = await Game.findOne({_id: req.params.id})
        if (!game) {
            return res.status(404).send({message: "Game doesnt exist!"})
        }
        let point = new Point({
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            index: req.body.index,
            question: req.body.question,
            correctAnswer: req.body.correctAnswer
        })
        game.points.push(point);
        const result = await game.save();
        console.log(result)
        return res.status(200).send({message: "Point was added"})
    } catch (error) {
        return res.status(500).send({message: "Something went 1231wrong."})
    }
};

// Retrieve all Points from the specific game.
exports.findAll = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id});
        if (!game) {
            return res.status(404).send({message: "Game doesnt exist!"})
        }

        return res.status(200).send({message: "Found", points: game.points})

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Find a single Point with an id and game id
exports.findOneById = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id});
        let point = await game.points.id(req.params.pointId)
        return res.status(200).send({message: "Found", point: point})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Update a Point by the id in the request
exports.update = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id});
        let point = await game.points.id(req.params.pointId);
        if(!point){
            return res.status(404).send({message: "Point doesnt exist"})
        }
        await point.set(req.body);
        await game.save()
        return res.status(200).send({message: "Game updated", point: point})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete a Point with the specified id in the request
exports.deleteById = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id});
        let point = await game.points.id(req.params.pointId).remove();
        await game.save()
        return res.status(200).send({message: "Game updated", point: point})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete all points for given game id
exports.deleteAll = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id});
        game.points = [];
        await game.save()
        return res.status(200).send({message: "All points were deleted"})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};
