var input = document.getElementById('number');
var paragrafRezultat = document.getElementById('rezultat');

function showNextNumber() {
	var n = Number(input.value);
	var next = n + 1;
	paragrafRezultat.innerHTML = 'Valoarea urmatoare este:' + next;
}
