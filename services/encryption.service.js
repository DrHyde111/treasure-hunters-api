const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.cryptPassword = function (password) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
        return err == null ? Promise.resolve(hash) : Promise.reject(err)
    });
}

exports.comparePassword = function (plainPass, hashword) {
    bcrypt.compare(plainPass, hashword, function (err, isPasswordMatch) {
        return err == null ? Promise.resolve(isPasswordMatch) : Promise.resolve(err)
    });
};