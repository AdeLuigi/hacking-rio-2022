var express = require('express');
var router = express.Router();
var userRoute = require('./user.route')
var userRate = require('./userRate.route')
var graphRoute = require('./graphRoute')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('I can edit');
});

router.use(userRoute)
router.use(userRate)
router.use(graphRoute)


module.exports = router;