var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('dashboard', { title: 'Blogen Dashoard' });
});
module.exports = router;
