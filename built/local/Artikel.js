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
