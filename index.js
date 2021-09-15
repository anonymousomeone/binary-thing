var int = []
var bytes = 8
if (process.argv.length > 2 && parseInt(process.argv[2])) {
	bytes = process.argv[2]
}
for (var i = 0; i < bytes; i++) {
	int.push(0)
}
while (true) {
	int[bytes - 1] += 1
	for (var i = bytes; i > -1; i--) {
		if (int[i] > 1) {
			int[i - 1] += 1;
			int[i] = 0;
		}
	}
	console.log(int.join(''))
	if (!int.join('').includes(0)) {return}
}