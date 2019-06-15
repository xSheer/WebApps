var Verwaltung = (function () {
    function Verwaltung() {
        this.addArtikelsToList = function (newArtikel) {
            var moreArtikels = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                moreArtikels[_i - 1] = arguments[_i];
            }
            this.artikels.push(newArtikel);
            var counter = 0;
            while (counter < moreArtikels.length) {
                this.artikels.push(moreArtikels[counter]);
                counter++;
            }
        };
        this.deleteArtikelsToList = function (oldArtikel) {
            var moreOldArtikels = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                moreOldArtikels[_i - 1] = arguments[_i];
            }
            var removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(oldArtikel.artikelID);
            this.artikels.splice(removeIndex, 1);
            for (var i = 0; i < moreOldArtikels.length; i++) {
                removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(moreOldArtikels[i].artikelID);
                if (removeIndex !== -1)
                    this.artikels.splice(removeIndex, 1);
            }
        };
        this.artikels = [];
    }
    Object.defineProperty(Verwaltung.prototype, "listArticles", {
        get: function () {
            return this.artikels;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Verwaltung;
}());
export default Verwaltung;
