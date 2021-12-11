const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.connectionString;
db.points = require("./points.model")(mongoose);

db.initConnection = async () => {
    await mongoose.connect(db.url)
}

module.exports = db