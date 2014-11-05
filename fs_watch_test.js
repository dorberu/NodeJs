var fs = require('fs');
var watcher = fs.watch('./sample/fs_watch.txt', function (event, filename) {
	var name = filename || './sample/fs_watch.txt';
	if (event == 'change') {
		console.log(name + ' changed.');
	} else if (event == 'rename') {
		console.log(name + ' renamed.');
	}
});

