var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function sumFrom1ToNeven() {
	var n = Number(firstNumberInput.value);

	var sum = 0;

	// for (var i = 1; i <= n; i++) {
	// 	if (i % 2 == 0) {
	// 		sum = sum + i;
	// 	}
	// }

	for (var i = 2; i <= n; i += 2) {
		sum = sum + i;
	}

	// var i = 2;
	// while(i <= n) {
	// 	sum = sum + i;
	// 	i = i + 2;
	// }

	output.innerHTML = 'Suma numerele de la 1 pana la ' + n + ' este ' + sum;
}
