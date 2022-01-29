const db = require("../models")
const User = db.user
const bcrypt = require("../services/encryption.service")
const jwt = require('jsonwebtoken')
const config = require('../config/global.config.js')

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
        let token = await jwt.sign({...user}, config.jswSecret, {expiresIn: 86400})

        return res.status(200).send({message: "Login successfull", user: user, token: token})
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