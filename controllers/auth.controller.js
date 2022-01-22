const db = require("../models")
const User = db.user
const bcrypt = require("../services/encryption.service")

exports.login = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(400).send({message: "Invalid credentials"})
        }
        let result = await bcrypt.comparePassword(req.body.password, user.password)
        if (!result) {
            return res.status(400).send({message: "Invalid credentials"})
        }
        return res.status(400).send({message: "Login successfull", user: user})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
}

exports.register = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
}