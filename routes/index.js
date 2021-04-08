var express = require('express');
var router = express.Router();

const ToDoListController = require('../controllers/ToDoListController');

/* GET home page. */
router.get('/', ToDoListController.index);

router.post("/create", ToDoListController.create);

router.get("/edit/:id", ToDoListController.edit);

router.post("/update/:id", ToDoListController.updated);

router.get("/delete/:id", ToDoListController.delete);

module.exports = router;
