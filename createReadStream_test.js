var fs = require('fs');
function readFromFile() {
	stream = fs.createReadStream('./sample/createReadStream.txt', { encoding: 'utf8' });
	stream.on('data', function (data) {
		console.log(data);
	});
}
readFromFile();
