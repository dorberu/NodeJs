function greeting(something) {
	console.log('hello, ' + something + '!');
};

exports = module.exports = greeting;

// node.jsコマンドで実行された場合のみメッセージを表示する
if (require.main === module) {
	greeting('world');
}
