var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alertSchema = new Schema({
    price: { type: Number, required: true },
    isUpward: { type: Boolean, required: true}
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;