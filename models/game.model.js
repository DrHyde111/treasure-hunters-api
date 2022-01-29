const mongoose = require("mongoose");
const PointSchema = require("./point.model");
const GameSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        points: [PointSchema],
        creator: String,
    },
    {timestamps: true}
)

module.exports = GameSchema

