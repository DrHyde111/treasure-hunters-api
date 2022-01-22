const mongoose = require("mongoose");
const PointSchema = new mongoose.Schema(
    {
        longitude: String,
        latitude: String,
        index: Number,
        question: String,
        correctAnswer: String,
        answers: [String],
    },
    {timestamps: true}
)

module.exports = PointSchema

