var mysql = require('mysql');
var connection = mysql.createConnection({
	database: 'test'
});

var value = {
	username: 'hogehoge',
	password: 'p09olki87ujmnhy65tgbvfr43edcxsw2'
	};
var query = connection.query('INSERT INTO users SET ?', value, function(err, result)
	{
		if (err) {
			throw err;
		}
		console.log('New uid is ' + result.insertId);
	});
