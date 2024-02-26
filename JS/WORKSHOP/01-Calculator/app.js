var firstNumberInput = document.getElementById('first-number');
var secondNumberInput = document.getElementById('second-number');
var output = document.getElementById('output');

function add() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var sum = firstNumber + secondNumber;

	output.innerHTML = firstNumber + ' + ' + secondNumber + ' = ' + sum;
}
