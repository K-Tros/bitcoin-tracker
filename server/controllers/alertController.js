var mongoose = require('mongoose');
var Alert = require('../models/Alert');

class AlertService {
    //  list
    static list() {
        return Alert.find({})
            .then((alerts) => {
                return alerts;
            });
    }

    //  find
    static read(id) {
        return Alert.findById(id)
            .then((alert) => {
                return alert;
            })
    }

    //  create
    static create(price, isUpward) {
        var alert = new Alert({
            price: price,
            isUpward: isUpward
        });

         return alert.save();
    };

    //  update
    static update(id, price, isUpward) {
        var update = {
            price: price,
            isUpward: isUpward
        };
        return Alert.findByIdAndUpdate(id, update);
    }

    //  delete
    static delete(id) {
        return Alert.findByIdAndRemove(id);
    }

    // deleteAll
    static deleteAll() {
        return Alert.remove();
    }
}

module.exports.AlertService = AlertService;