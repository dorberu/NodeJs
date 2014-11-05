var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('sampledb', server, {safe: true});

db.open(function (err, db) {
	if (err) {
		throw err;
	}
});

