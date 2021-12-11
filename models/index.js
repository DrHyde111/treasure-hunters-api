const dbConfig = require("../config/db.config.js");

const UserSchema = require("./user.model")
const GameSchema = require("./game.model")

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.connectionString;

db.user = mongoose.model("user", UserSchema);
db.game = mongoose.model("game", GameSchema)

db.initConnection = async () => {
    await mongoose.connect(db.url)
}

module.exports = db