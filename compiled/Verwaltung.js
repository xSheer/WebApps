"use strict";

function Verwaltung() {
  var artikels = []; //TODO static? 

  this.listArticles = function () {
    return artikels;
  };

  this.addArtikelsToList = function (newArtikel) {
    artikels.push(newArtikel);
    var counter = 0;

    while (counter < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
      artikels.push(counter + 1 < 1 || arguments.length <= counter + 1 ? undefined : arguments[counter + 1]);
      counter++;
    }
  };

  this.deleteArtikelsToList = function (oldArtikel) {
    //Get Index of oldArtikel
    var removeIndex = artikels.map(function (object) {
      return object.artikelID;
    }).indexOf(oldArtikel.artikelID); //remove oldArtikel by Index

    artikels.splice(removeIndex, 1);

    for (var _len = arguments.length, moreOldArtikels = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      moreOldArtikels[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < moreOldArtikels.length; i++) {
      removeIndex = artikels.map(function (object) {
        return object.artikelID;
      }).indexOf(moreOldArtikels[i].artikelID);
      if (removeIndex !== -1) artikels.splice(removeIndex, 1);
    }
  };
}