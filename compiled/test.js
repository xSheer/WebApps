"use strict";

//Test Klasse
//Create Artikel
var artikel1 = new Artikel('Jeans', 'Asos Jeans', 139);
var artikel2 = new Artikel('Pulli', 'Asos Pulli', 49, 39);
console.log(artikel1); //Create Schuh

var schuh1 = new Schuhe('Schuh', 'New Nikes', 119, 79, 42, 'Nike');
var schuh2 = new Schuhe('Schuh', 'New Adidias', 79, undefined, 42, 'Adidias');
console.log(schuh1);
console.log(schuh1.artikelID); //Create Verwaltung

var verwaltung = new Verwaltung(); //List should be empty

console.log(verwaltung.listArticles()); //Add Schuh

verwaltung.addArtikelsToList(schuh1);
console.log(verwaltung.listArticles()); //Add mutiple artikels at once

verwaltung.addArtikelsToList(schuh2, artikel1, artikel2);
console.log(verwaltung.listArticles()); //Delete just one artikel

verwaltung.deleteArtikelsToList(schuh1);
console.log(verwaltung.listArticles()); //Delete mutiple artikels at once

verwaltung.deleteArtikelsToList(artikel1, artikel2);
console.log(verwaltung.listArticles());
var test = 10;
console.log(test); //Babel Testing

var es2016 = function es2016() {
  return "Hallo World";
};