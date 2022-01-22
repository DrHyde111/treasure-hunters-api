const mongoose = require("mongoose");
const ChallengeSchema = require("./challenge.model");
const PointSchema = new mongoose.Schema(
    {
        longitude: String,
        latitude: String,
        challenge: ChallengeSchema,
        index: Number
    },
    {timestamps: true}
)

module.exports = PointSchema

