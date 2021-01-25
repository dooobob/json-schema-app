var express = require('express');
var router = express.Router();
var user = require('../public/json/user');
var contact = require('../public/json/contact');
var customer = require('../public/json/customer');
var todo = require('../public/json/todo');
var item = require('../public/json/item');
var kit = require('../public/json/kit');
var sales = require('../public/json/sales');
var order = require('../public/json/order');
var spec = require('../public/json/spec');


/* GET home page. */
router.get('/user', function (req, res, next) {
  res.json(user);
});

router.get('/contact', function (req, res, next) {
  res.json(contact);
});

router.get('/customer', function (req, res, next) {
  res.json(customer);
});

router.get('/todo', function (req, res, next) {
  res.json(todo);
});

router.get('/item', function (req, res, next) {
  res.json(item);
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

router.get('/spec', function (req, res, next) {
  res.json(spec);
});

module.exports = router;