var path;

try {
	path = require.resolve('./hello.js');
} catch(e) {
	path = null;
}

console.log('path = ' + path);
