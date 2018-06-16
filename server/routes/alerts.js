var express = require('express');
var router = express.Router();

require('../models/Db');
var alertController = require('../controllers/alertController');
const AlertService = alertController.AlertService;

router.get('/', function(req, res, next) {
    AlertService.list()
        .then((alerts) => {
            res.render('alerts', {'alerts': alerts});
        })
});

module.exports = router;
