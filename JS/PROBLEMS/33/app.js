// 33. Se citeste un sir de caractere. Sa se afiseze procentajul de vocale. Se ignora spatiile
// albe in calculul caracterelor.
// Exemplu:
// Se citeste “Ana are mere”. Se afiseaza: 60%
var textArea = document.getElementById('fraza');
var paragrafRezultat = document.getElementById('output');

function calculeazaProcentVocale() {
	var fraza = textArea.value;
	var i = 0;
	var numarTotalDeVocale = 0;
	var numarulTotalDeSpatii = 0;

	while (i <= fraza.length - 1) {
		if (
			fraza[i] == 'A' ||
			fraza[i] == 'a' ||
			fraza[i] == 'E' ||
			fraza[i] == 'e' ||
			fraza[i] == 'I' ||
			fraza[i] == 'i' ||
			fraza[i] == 'O' ||
			fraza[i] == 'o' ||
			fraza[i] == 'U' ||
			fraza[i] == 'u'
		) {
			numarTotalDeVocale = numarTotalDeVocale + 1;
		}
		if (fraza[i] == ' ') {
			numarulTotalDeSpatii = numarulTotalDeSpatii + 1;
		}
		i = i + 1;
	}
	var lungimeaFaraSpatii = fraza.length - numarulTotalDeSpatii;

	paragrafRezultat.innerHTML =
		'Procentul de vocale: ' +
		(numarTotalDeVocale / lungimeaFaraSpatii) * 100 +
		'%';
}
