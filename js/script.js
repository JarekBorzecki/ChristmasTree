//deklaracja i inicjalizacja zmiennej przez uzytkownika
var treeHeight = prompt('Podaj wysokość choinki:');
//funkcja rysujaca choinkę
function drawTree(treeHeight) {
	for(var i = 0; i < treeHeight; i++) {
		var star = '';
		//petla rysująca spacje
		for(var j = 1; j < treeHeight - i; j++) {
			star += ' ';
		}
		//pętla rysująca gwiazdki
		for(var stars = 0; stars < ( 2 * i + 1 ); stars++) {
			star += '*';
		}
		console.log(star);
	}
}
//wywołanie funkcji i to rząd, j to ile, 
drawTree(treeHeight);