export default class Artikel {
    constructor(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) {
        this.isCheaperThan = function (artikel) {
            if (this.artikelPreis <= artikel._artikelPreis) {
                return true;
            }
            return false;
        };
        this.getId = function () {
            return this.artikelID;
        };
        this._artikelID = Math.random() * (+10 - +1) + 1;
        this.artikelBeschreibung = artikelBeschreibung;
        this._artikelPreis = artikelPreis;
        this._artikelSonderPreis = artikelSonderPreis;
        if (!artikelName) {
            this._artikelName = String(this._artikelID);
        }
        else {
            this._artikelName = artikelName;
        }
    }
    get artikelID() {
        return this._artikelID;
    }
    get artikelName() {
        return this._artikelName;
    }
    set artikelName(artikelName) {
        if (artikelName != '') {
            this._artikelName = artikelName;
        }
        else {
            this._artikelName = String(this._artikelID);
        }
    }
    get artikelPreis() {
        if (this._artikelSonderPreis != undefined)
            return this._artikelSonderPreis;
        return this._artikelPreis;
    }
    set artikelPreis(artikelPreis) {
        if (artikelPreis >= 0)
            this._artikelPreis = artikelPreis;
    }
    get artikelSonderPreis() {
        return this._artikelSonderPreis;
    }
    set artikelSonderPreis(artikelSonderPreis) {
        if (artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
            this._artikelSonderPreis = artikelSonderPreis;
    }
}

import Artikel from './Artikel';
export default class Schuhe extends Artikel {
    constructor(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke) {
        super(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis);
        this._schuhGroesse = schuhGroesse;
        this._schuhMarke = schuhMarke;
        this._artikelPreis = artikelPreis;
        this._artikelSonderPreis = artikelSonderPreis;
    }
    get schuhGroesse() {
        return this._schuhGroesse;
    }
    get schuhMarke() {
        return this._schuhMarke;
    }
    set schuhMarke(schuhMarke) {
        this._schuhMarke = schuhMarke;
    }
    get artikelSonderPreis() {
        if (this._artikelSonderPreis != undefined)
            return this._artikelSonderPreis;
        return this._artikelPreis;
    }
    set artikelSonderPreis(artikelPreis) {
        if (artikelPreis >= 5)
            this._artikelPreis = artikelPreis;
    }
}

export default class Verwaltung {
    constructor() {
        this.addArtikelsToList = function (newArtikel, ...moreArtikels) {
            this.artikels.push(newArtikel);
            let counter = 0;
            while (counter < moreArtikels.length) {
                this.artikels.push(moreArtikels[counter]);
                counter++;
            }
        };
        this.deleteArtikelsToList = function (oldArtikel, ...moreOldArtikels) {
            let removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(oldArtikel.artikelID);
            this.artikels.splice(removeIndex, 1);
            for (var i = 0; i < moreOldArtikels.length; i++) {
                removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(moreOldArtikels[i].artikelID);
                if (removeIndex !== -1)
                    this.artikels.splice(removeIndex, 1);
            }
        };
        this.artikels = [];
    }
    get listArticles() {
        return this.artikels;
    }
    ;
}

import Artikel from './Artikel';
import Schuhe from './Schuhe';
import Verwaltung from './Verwaltung';
let artikel1 = new Artikel('Jeans', 'Asos Jeans', 139, 0);
console.log(artikel1);
let artikel2 = new Artikel('Pulli', 'Asos Pulli', 49, 39);
console.log(artikel2);
let artikel3 = new Schuhe('Schuhe', 'Nike Schuhe', 129, 0, 42, 'Nike');
console.log(artikel3);
let artikel4 = new Schuhe('Schuhe', 'Adidas Schuhe', 79, 0, 39, 'Adidas');
console.log(artikel4);
let verwaltung = new Verwaltung();
verwaltung.addArtikelsToList(artikel1, artikel2, artikel3, artikel4);
console.log(verwaltung.listArticles());
verwaltung.deleteArtikelsToList(artikel1);
console.log(verwaltung.listArticles());
console.log("TEST2dff");
