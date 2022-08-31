var express = require('express');
var router = express.Router();

const User = require('../schemas/User.schema')

router.post('/user', async function(req, res) {

    const { name, age, number, email } = req.body
  
    const user = await User.create({name, age, number, email, createdAt: new Date(), upadatedAt: new Date()})
  
    return res.status(201).json(user)
});
  
router.get('/user', async function(req, res) {

    const users = await User.find()

    return res.status(200).json(users)

});
  
router.put('/user/:id', async function(req, res) {

    const filter = { _id: req.params.id };
    const update = { ...req.body };
    const user = await User.findByIdAndUpdate(filter, update, {
        new: true
    })

    return res.status(200).json(user)

});
  
router.delete('/user/:id', async function(req, res) {
  
    const filter = { _id: req.params.id };
    const user = await User.findByIdAndDelete(filter,{
      new: true
    })
  
    return res.status(200)
  
});

module.exports = router