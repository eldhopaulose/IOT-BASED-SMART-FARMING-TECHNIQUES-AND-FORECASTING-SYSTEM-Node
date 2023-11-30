var express = require('express');
var router = express.Router();
const md = require('../config')
const user = require('../user')

/* GET users listing. */
router.get('/', function(req, res, next) { 
  // res.send('respond with a resource');
  user.find({})
// .select('name')
// .exec()
.then(r => {
  res.send(r)
})
  
}); 
md();

module.exports = router;
