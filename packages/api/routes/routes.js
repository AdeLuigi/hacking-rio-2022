var express = require('express');
var router = express.Router();

const User = require('../schemas/User.schema')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

router.post('/user', async function(req, res) {

  const { name, age, number, email } = req.body

  const user = await User.create({name, age, number, email, createdAt: new Date(), upadatedAt: new Date()})

  return res.status(201).json(user)
});

module.exports = router;