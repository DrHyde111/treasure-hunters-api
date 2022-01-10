const bcrypt = require('bcrypt');

exports.cryptPassword = async function (password) {
    try {
        return await bcrypt.hash(password, 10);
    }catch (error){
        throw error
    }
}

exports.comparePassword = async function (plainPass, hashword) {
    try {
        return await bcrypt.compare(plainPass, hashword)
    } catch (error) {
        throw error
    }
};