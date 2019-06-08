function Verwaltung(){
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

export {Verwaltung};