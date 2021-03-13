var express = require('express');
var router = express.Router();

const ToDoListController = require('../controllers/ToDoListController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create", ToDoListController.create);



module.exports = router;
