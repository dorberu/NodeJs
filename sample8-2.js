var mysql = require('mysql');
var connection = mysql.createConnection({
	database: 'test'
});

var query = connection.query('SELECT * FROM users;');

query.on('error', function (err) {
	console.log('get error');
	console.log(err);
});

query.on('field', function (field) {
	console.log('get field');
	console.log(field);
});

query.on('result', function (result) {
	console.log('get result');
	console.log(result);
});

query.on('end', function () {
	console.log('get result');
	connection.destroy();
});
