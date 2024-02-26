var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function sumFrom1ToN() {
	var n = Number(firstNumberInput.value);

	var sum = 0;

	for (var i = 1; i <= n; i++) {
		sum = sum + i;
	}

	// var i = 1;
	// while(i <= n) {
	// 	sum = sum + i;
	// 	i = i + 1;
	// }

	output.innerHTML = 'Suma numerele de la 1 pana la ' + n + ' este ' + sum;
}
