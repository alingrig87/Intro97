var input = document.getElementById('number');

function afiseazaFibonacci() {
	var n = Number(input.value);
	var paragraph = document.getElementById('output');
	paragraph.innerHTML = '';

	var a = 0;
	var b = 1;

	console.log(a);
	paragraph.innerHTML += '<span class="circle red">' + a + '</span>';
	paragraph.innerHTML += '<span class="circle red">' + b + '</span>';

	var i = 3;

	while (i <= n) {
		var tmp = a + b;
		a = b;
		b = tmp;
		paragraph.innerHTML += '<span class="circle red">' + b + '</span>';
		i = i + 1;
	}
}
