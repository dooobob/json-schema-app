var express = require('express');
var router = express.Router();
var user = require('../public/json/user');
var todo = require('../public/json/todo');
var product = require('../public/json/product');
var kit = require('../public/json/kit');
var sales = require('../public/json/sales');
var order = require('../public/json/order');


/* GET home page. */
router.get('/user', function (req, res, next) {
  res.json(user);
});

router.get('/todo', function (req, res, next) {
  res.json(todo);
});

router.get('/product', function (req, res, next) {
  res.json(product);
});

router.get('/kit', function (req, res, next) {
  res.json(kit);
});

router.get('/sales', function (req, res, next) {
  res.json(sales);
});

router.get('/order', function (req, res, next) {
  res.json(order);
});

module.exports = router;