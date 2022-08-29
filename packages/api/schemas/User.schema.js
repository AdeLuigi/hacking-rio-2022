const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    number: String,
    createdAt: Date,
    upadatedAt: Date,
})

module.exports = mongoose.model("User", userSchema)