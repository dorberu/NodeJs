var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
	// ステータスコード200でHTTPレスポンスヘッダを出力する
	response.writeHead(200);

	// リクエストURLを出力する
	response.write('URL: ' + request.url + '\n');

	// HTTPメソッドを出力する
	response.write('Method: ' + request.method + '\n');

	// HTTPヘッダーを出力する
	Object.keys(request.headers).forEach(function (key) {
		response.write(key + ': ' + request.headers[key] + '\n');
	});

	// レスポンスを終了する
	response.end();
});

server.listen(8080);

