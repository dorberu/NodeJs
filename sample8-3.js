var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('sampledb', server, {safe: true});

db.open(function (err, db) {
	if (err) {
		throw err;
	}

	var collection = db.collection('topics');
	var topic1 = {
		topicId: 1,
		title: 'トピック1：これはトピック#１です',
		text: 'トピック1：これはテスト用トピック１です',
		data: new Date(2011, 10, 1, 12, 12, 12),
		postBy: 'Taro',
		relatedUrl: 'http://example.com/',
		replies: [1, 3]
	};

	collection.insert(topic1, function (err, result) {
		if (err) {
			throw err;
		}
		console.log("insert result :");
		console.log(result);
	});

	var cursor = collection.find();
	cursor.limit(3);
	cursor.sort(['_id', 'desc']);
	cursor.toArray(function (err, docs) {
		console.log("find result :");
		console.log(docs);
	});
});

