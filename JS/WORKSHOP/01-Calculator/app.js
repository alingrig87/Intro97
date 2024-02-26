var firstNumberInput = document.getElementById('first-number');
var secondNumberInput = document.getElementById('second-number');
var output = document.getElementById('output');

function add() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var sum = firstNumber + secondNumber;

	output.innerHTML = firstNumber + ' + ' + secondNumber + ' = ' + sum;
}

function subtract() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var res = firstNumber - secondNumber;

	output.innerHTML = firstNumber + ' - ' + secondNumber + ' = ' + res;
}

function multiply() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var res = firstNumber * secondNumber;

	output.innerHTML = firstNumber + ' x ' + secondNumber + ' = ' + res;
}

function divide() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var res = firstNumber / secondNumber;

	output.innerHTML = firstNumber + ' / ' + secondNumber + ' = ' + res;
}

function modulus() {
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	var res = firstNumber % secondNumber;

	output.innerHTML = firstNumber + ' % ' + secondNumber + ' = ' + res;
}
