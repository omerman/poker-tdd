var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hand', function(req, res, next) {
  res.json([{ suit: 'HEARTS', value: 13 }, { suit: 'CLUBS', value: 13 }]);
});

module.exports = router;
