export default function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis){

    //# bei der Verwendung von privaten Varibalen
    let _artikelID = Math.random() * (+10 - +1) + 1; 
    let _artikelName = artikelName;
    this.artikelBeschreibung = artikelBeschreibung;
    let _artikelPreis = artikelPreis;
    let _artikelSonderPreis = artikelSonderPreis;
    this.implementsInterfaces = ['Compareable'];

    if(arguments.length == 0){
        this._artikelName = _artikelID;
    }else {
        this._artikelName = artikelName;
    }

    Object.defineProperty(this, 'artikelID', {
        get: function(){
            return _artikelID;
        }
    });

    Object.defineProperty(this, 'artikelName', {
        get: function(){
            return _artikelName;
        },
        set: function(artikelName){
            if(artikelName != ''){
                return _artikelName = artikelName;
            }
            return _artikelName = _artikelID;
        }
    });

    Object.defineProperty(this, 'artikelPreis', {
        get: function(){
            if(_artikelSonderPreis != undefined)
                return _artikelSonderPreis;
            return _artikelPreis;
        },
        set: function(artikelPreis){
            if(artikelPreis >= 0)
                return _artikelPreis = artikelPreis;
        },
        configurable: true
    });

    Object.defineProperty(this, 'artikelSonderPreis', {
        get: function(){
            return _artikelSonderPreis;
        },
        set: function(artikelSonderPreis){
            if(artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
                return _artikelSonderPreis = artikelSonderPreis;
        }
    });

    //Public method
    this.isCheaperThan = function(artikel){
        if(this.artikelPreis <= artikel.artikelPreis){
            return true;
        }
        return false;
    };

    this.getId = function(){
        return this.artikelID;
    };
}
import Artikel from './Artikel.js';

export default function Schuhe(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke){
    Artikel.call(this, artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis);
    let _schuhGroesse = schuhGroesse;
    let _schuhMarke = schuhMarke;
    let _artikelPreis = artikelPreis;
    let _artikelSonderPreis = artikelSonderPreis;

    Object.defineProperty(this, 'schuhGroesse', {
        get: function(){
            return _schuhGroesse;
        }
    });

    Object.defineProperty(this, 'schuhMarke', {
        get: function(){
            return _schuhMarke;
        },
        set: function(schuhMarke){
        return _schuhMarke = schuhMarke;
        }
    });

    Object.defineProperty(this, 'artikelPreis', {
        get: function(){
            if(_artikelSonderPreis != undefined)
                return _artikelSonderPreis;
            return _artikelPreis;
        },
        set: function(artikelPreis){
            if(artikelPreis >= 5)
                return _artikelPreis = artikelPreis;
        }
    });
}
export default function Verwaltung(){
    let artikels = []; //TODO static? 

    this.listArticles = function(){
        return artikels;
    };

    this.addArtikelsToList = function(newArtikel, ...moreArtikels){
        artikels.push(newArtikel);
        let counter = 0; 
        while(counter < moreArtikels.length){
            artikels.push(moreArtikels[counter]);
            counter++;
        }
    };

    this.deleteArtikelsToList = function(oldArtikel, ...moreOldArtikels){
        //Get Index of oldArtikel
        let removeIndex = artikels.map(function(object) { return object.artikelID; }).indexOf(oldArtikel.artikelID);
        //remove oldArtikel by Index
        artikels.splice(removeIndex, 1);

        for (var i = 0; i < moreOldArtikels.length; i++) {
            removeIndex = artikels.map(function(object) { return object.artikelID; }).indexOf(moreOldArtikels[i].artikelID);

            if(removeIndex !== -1)
            artikels.splice(removeIndex, 1);
        }
    };
}
import Artikel from './Artikel.js';
import Schuhe from './Schuhe.js';
import Verwaltung from './Verwaltung.js';

let artikel1 = new Artikel('Jeans', 'Asos Jeans', 139);
console.log(artikel1);

let artikel2 = new Artikel('Pulli', 'Asos Pulli', 49, 39);
console.log(artikel2);

let artikel3 = new Schuhe('Schuhe', 'Nike Schuhe', 129);
console.log(artikel3);

let artikel4 = new Schuhe('Schuhe', 'Adidas Schuhe', 79);
console.log(artikel4);

let verwaltung = new Verwaltung();
verwaltung.addArtikelsToList(artikel1, artikel2, artikel3, artikel4);

console.log(verwaltung.listArticles());
verwaltung.deleteArtikelsToList(artikel1);
console.log(verwaltung.listArticles());
//Test Klasse

// //Create Artikel
// let artikel1 = new Artikel('Jeans', 'Asos Jeans', 139);
// let artikel2 = new Artikel('Pulli', 'Asos Pulli', 49, 39);
// console.log(artikel1);

// //Create Schuh
// let schuh1 = new Schuhe('Schuh', 'New Nikes', 119, 79, 42, 'Nike');
// let schuh2 = new Schuhe('Schuh', 'New Adidias', 79, undefined, 42, 'Adidias');
// console.log(schuh1);
// console.log(schuh1.artikelID);

// //Create Verwaltung
// let verwaltung = new Verwaltung();
// //List should be empty
// console.log(verwaltung.listArticles());
// //Add Schuh
// verwaltung.addArtikelsToList(schuh1);
// console.log(verwaltung.listArticles());

// //Add mutiple artikels at once
// verwaltung.addArtikelsToList(schuh2, artikel1, artikel2);
// console.log(verwaltung.listArticles());

// //Delete just one artikel
// verwaltung.deleteArtikelsToList(schuh1);
// console.log(verwaltung.listArticles());

// //Delete mutiple artikels at once
// verwaltung.deleteArtikelsToList(artikel1, artikel2);
// console.log(verwaltung.listArticles());

// let test = 10;
// console.log(test);

// //Babel Testing
// let es2016 = () => {
//     return "Hallo World";
// }
