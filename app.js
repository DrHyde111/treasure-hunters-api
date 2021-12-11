const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./models/index");

const app = express();
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

db.initConnection()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});