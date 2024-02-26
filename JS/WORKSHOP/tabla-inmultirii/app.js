var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function tablaInmultirii() {
	var n = Number(firstNumberInput.value);
	output.innerHTML = '';

	for (var i = 1; i <= 10; i++) {
		output.innerHTML =
			output.innerHTML + i + ' x ' + n + ' = ' + n * i + '<br>';
	}
}
