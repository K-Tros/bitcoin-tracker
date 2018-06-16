var express = require('express');
var router = express.Router();

require('../models/Db');
var Alert = require('../models/Alert');
var alertController = require('../controllers/alertController');
const AlertService = alertController.AlertService;

/* GET home page. */
router.get('/', function(req, res, next) {
    AlertService.list()
        .then((alerts) => {
            var numOfAlerts = alerts.length;
            res.render('index', { title: 'Homepage', numOfAlerts: numOfAlerts});
        })
});

module.exports = router;
