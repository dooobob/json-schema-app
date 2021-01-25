var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:app/:collection', function (req, res, next) {
  let app = req.params.app;
  let collection = req.params.collection;

  const schema = require('../public/json/' + app + '/' + collection + '.schema');

  res.render('schema', {
    schema: schema
  });
});

module.exports = router;