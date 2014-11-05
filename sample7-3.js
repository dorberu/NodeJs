function measureSin(count) {
	console.time('for-loop')
	for (var i = 0; i < count; i++) {
		Math.sin(Math.PI);
	}
	console.timeEnd('for-loop');
}

measureSin(500000)
