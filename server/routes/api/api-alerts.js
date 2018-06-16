var express = require('express');
var router = express.Router();

var alertController = require('../../controllers/alertController');
const AlertService = alertController.AlertService;

router.use((req, res, next)=>{
    res.set({
        // Allow AJAX access from any domain
        'Access-Control-Allow-Origin':'*',
        // Allow methods and headers for 'preflight'
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    });
    // if this is a preflight, we're done and can send the response with our headers
    if(req.method == 'OPTIONS'){
        return res.status(200).end();
    }
    next();
})

// alert-items - list
router.get('/', (req, res, next) => {
    AlertService.list()
        .then((alerts) => {
            res.status(200);
            res.set({'Content-type': 'application/json'});
            res.json(alerts);
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

// alert-items/:alertid - find
router.get('/:alertid', (req, res, next) => {
    AlertService.read(req.params.alertid)
        .then((alert) => {
            res.status(200);
            res.set({'Content-type': 'application/json'});
            res.json(alert);
        }).catch((err) => {
            res.status(404);
            res.end();
    })
});

// alert-items POST create
router.post('/', (req, res) => {
    AlertService.create(req.body.price, req.body.isUpward)
        .then((newAlert) => {
            console.log('alert saved!');
            console.log(newAlert);
            res.status(200).json(newAlert);
            res.end();
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

// alert-items/:alertid PUT - updated
router.put('/:alertid', (req, res) => {
    AlertService.update(req.params.alertid, req.body.price, req.body.isUpward)
        .then(() => {
            console.log('Updated _id: ' + req.params.alertid)
            res.status(200);
            res.end();
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

// alert-items DELETE - delete all
router.delete('/', (req, res) => {
    AlertService.deleteAll()
        .then(() => {
            console.log('all Alerts deleted!');
            res.status(200);
            res.end();
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

// alert-items/:alertid DELETE - delete
router.delete('/:alertid', (req, res) => {
    AlertService.delete(req.params.alertid)
        .then(() => {
            console.log('Removed _id: ' + req.params.alertid)
            res.status(200);
            res.end();
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

// export our router
module.exports = router;