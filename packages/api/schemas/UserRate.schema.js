const mongoose = require('mongoose')

const userRateSchema = new mongoose.Schema({
    title: String,
    description: String,
    likes: Number,
    community: String,
    tags: [String],
    createdAt: Date,
    upadatedAt: Date,
})

module.exports = mongoose.model("UserRate", userRateSchema)