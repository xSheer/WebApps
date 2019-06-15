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
