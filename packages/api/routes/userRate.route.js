var express = require('express');
var router = express.Router();

const UserRate = require('../schemas/UserRate.schema')

router.post('/userrate', async function(req, res) {

    const { title, description, community, tags } = req.body
  
    const userRate = await UserRate.create({title, description, community, tags, likes:0, createdAt: new Date(), upadatedAt: new Date()})
  
    return res.status(201).json(userRate)
});
  
router.get('/userrate', async function(req, res) {

    const userRates = await UserRate.find()

    return res.status(200).json(userRates)

});
  
router.put('/userrate/:id', async function(req, res) {

    const filter = { _id: req.params.id };
    const userRate = await UserRate.findById(filter)

    userRate.likes = userRate.likes + 1;

    userRate.save();

    return res.status(200).json(userRate)

});
  
router.delete('/userrate/:id', async function(req, res) {
  
    const filter = { _id: req.params.id };
    const userRate = await UserRate.findByIdAndDelete(filter,{
      new: true
    })
  
    return res.status(200)
  
});

module.exports = router