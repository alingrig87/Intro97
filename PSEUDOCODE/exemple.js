var varsta = 67;
var numarAniExperienta = 10;
var poateIesiLaPensie = varsta >= 65 && numarAniExperienta >= 15;

var areCard = false;
var fonduriCard = 1300;
var valoareNotaDePlata = 1200;
var baniiDinBuzunar = 900;
var areCash = true;
var poatePlati =
	(areCard && fonduri >= valoareNotaDePlata) ||
	(areCash && baniiDinBuzunar >= valoareNotaDePlata);

var areTelecomandaDeAccesParcare = true;
var acessInterzisInParcare = !areTelecomandaDeAccesParcare;

var VARSTA_MINIMA_DE_PENSIONARE = 65;
var VECHIME_MINIMA_IN_MUNCA_PENTRU_DREPT_LA_PENSIE = 15;

READ varsta;
READ numarAniExperienta;

var poateIesiLaPensie = varsta >= VARSTA_MINIMA_DE_PENSIONARE && numarAniExperienta >= VECHIME_MINIMA_IN_MUNCA_PENTRU_DREPT_LA_PENSIE;

5 % 2 --> 1
8 % 4 --> 0
6 % 5 --> 1

