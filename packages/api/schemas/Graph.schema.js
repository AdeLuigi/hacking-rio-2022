const mongoose = require('mongoose')

const graphSchema = new mongoose.Schema({
    category: String,
    description: String,
    health: Number,
    news: Number,
    community: String,    
    createdAt: Date,
    upadatedAt: Date,
  })

module.exports = mongoose.model("Graph", graphSchema)