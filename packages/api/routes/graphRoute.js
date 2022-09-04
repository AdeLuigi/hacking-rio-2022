var express = require('express');
var router = express.Router();

const Graph = require('../schemas/Graph.schema')

router.post('/graph', async function(req, res) {

    const { category, community, description, health, news } = req.body
  
    const graph = await Graph.create({category, community, description, health, news, createdAt: new Date(), upadatedAt: new Date()})
  
    return res.status(201).json(graph)
});
  
router.get('/graph', async function(req, res) {

    const graphs = await Graph.find()

    return res.status(200).json(graphs)

});
  
router.put('/graph/:id', async function(req, res) {

    const filter = { _id: req.params.id };
    const graph = await Graph.findById(filter)

    graph.likes = graph.likes + 1;

    graph.save();

    return res.status(200).json(graph)

});
  
router.delete('/graph/:id', async function(req, res) {
  
    const filter = { _id: req.params.id };
    const graph = await Graph.findByIdAndDelete(filter,{
      new: true
    })
  
    return res.status(200)
  
});

module.exports = router