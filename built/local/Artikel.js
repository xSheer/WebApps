var Artikel = (function () {
    function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) {
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
    Object.defineProperty(Artikel.prototype, "artikelID", {
        get: function () {
            return this._artikelID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Artikel.prototype, "artikelName", {
        get: function () {
            return this._artikelName;
        },
        set: function (artikelName) {
            if (artikelName != '') {
                this._artikelName = artikelName;
            }
            else {
                this._artikelName = String(this._artikelID);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Artikel.prototype, "artikelPreis", {
        get: function () {
            if (this._artikelSonderPreis != undefined)
                return this._artikelSonderPreis;
            return this._artikelPreis;
        },
        set: function (artikelPreis) {
            if (artikelPreis >= 0)
                this._artikelPreis = artikelPreis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Artikel.prototype, "artikelSonderPreis", {
        get: function () {
            return this._artikelSonderPreis;
        },
        set: function (artikelSonderPreis) {
            if (artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
                this._artikelSonderPreis = artikelSonderPreis;
        },
        enumerable: true,
        configurable: true
    });
    return Artikel;
}());
export default Artikel;
