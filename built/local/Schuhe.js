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
