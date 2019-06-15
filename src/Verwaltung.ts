import Artikel from './Artikel.js';

export default class Verwaltung{
    
    private artikels:any;

    constructor(){
        this.artikels = []; 
    }

    get listArticles():any{
        return this.artikels;
    };

    addArtikelsToList = function(newArtikel:Artikel, ...moreArtikels:any){
        this.artikels.push(newArtikel);
        let counter = 0; 
        while(counter < moreArtikels.length){
            this.artikels.push(moreArtikels[counter]);
            counter++;
        }
    };

    deleteArtikelsToList = function(oldArtikel:Artikel, ...moreOldArtikels:any){
        //Get Index of oldArtikel
        let removeIndex = this.artikels.map(function(object:any) { return object.artikelID; }).indexOf(oldArtikel.artikelID);
        //remove oldArtikel by Index
        this.artikels.splice(removeIndex, 1);

        for (var i = 0; i < moreOldArtikels.length; i++) {
            removeIndex = this.artikels.map(function(object:any) { return object.artikelID; }).indexOf(moreOldArtikels[i].artikelID);

            if(removeIndex !== -1)
            this.artikels.splice(removeIndex, 1);
        }
    };
}