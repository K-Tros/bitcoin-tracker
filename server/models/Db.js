var mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00-cjxpg.mongodb.net:27017,cluster0-shard-00-01-cjxpg.mongodb.net:27017,cluster0-shard-00-02-cjxpg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);
var db = mongoose.connection;

module.exports = db;