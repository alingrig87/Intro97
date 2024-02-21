// alert('Salut la incarcarea paginii!');

var input = document.getElementById('nume');
var iconitaOchisor = document.getElementById('ochisor');

function schimbaTipulDeElementInput() {
	console.log(input.type);

	if (input.type == 'password') {
		input.type = 'text';
		iconitaOchisor.classList.remove('fa-eye-slash');
		iconitaOchisor.classList.add('fa-eye');
		iconitaOchisor.style.color = 'black';
	} else if (input.type == 'text') {
		input.type = 'password';
		iconitaOchisor.classList.remove('fa-eye');
		iconitaOchisor.classList.add('fa-eye-slash');
		iconitaOchisor.style.color = 'gray';
	}
}

var person = {
	name: 'Ion',
	varsta: 35,
	isMarried: true,
};

var inputElementExample = {
	id: 'nume',
	type: 'text',
};

console.log(person.name);
console.log(person['varsta']);

var a;
console.log(a);
var car = null;
console.log(car);

function average(a, b, c) {
	var total;
	total = a + b + c;
	return total / 3;
}

var avg1 = average(9, 9, 10);
var avg2 = average(8, 8, 9);
var avg3 = average(4, 6, 2);

console.log(avg1, avg2, avg3);
console.log('avg1 = ', avg1);
console.log('avg2 = ', avg2);
console.log('avg3 = ', avg3);
