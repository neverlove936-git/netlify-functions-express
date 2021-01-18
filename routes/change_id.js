var express = require('express');
var router = express.Router();

/* GET change-id */
router.get('/', function(req, res, next) {
  console.log(JSON.stringify(req.headers['authorization']));
  res.render('change-id', { title: 'Change ID', token: req.headers['authorization'] });
});

module.exports = router;
