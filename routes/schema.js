var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:collection', function (req, res, next) {
  let collection = req.params.collection;
  const schema = require('../public/json/' + collection + '_schema');
  
  res.render('schema', { schema: schema });
});

module.exports = router;