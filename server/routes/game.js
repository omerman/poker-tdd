var express = require('express');
var router = express.Router();

router.get('/state', function(req, res, next) {
  res.json({
    cards: [{ suit: 'HEARTS', value: 13 }, { suit: 'CLUBS', value: 13 }],
    opponent: true,
  });
});

module.exports = router;
