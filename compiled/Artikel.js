"use strict";

function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) {
  //# bei der Verwendung von privaten Varibalen
  var _artikelID = Math.random() * (+10 - +1) + 1;

  var _artikelName = artikelName;
  this.artikelBeschreibung = artikelBeschreibung;
  var _artikelPreis = artikelPreis;
  var _artikelSonderPreis = artikelSonderPreis;
  this.implementsInterfaces = ['Compareable'];

  if (arguments.length == 0) {
    this._artikelName = _artikelID;
  } else {
    this._artikelName = artikelName;
  }

  Object.defineProperty(this, 'artikelID', {
    get: function get() {
      return _artikelID;
    }
  });
  Object.defineProperty(this, 'artikelName', {
    get: function get() {
      return _artikelName;
    },
    set: function set(artikelName) {
      if (artikelName != '') {
        return _artikelName = artikelName;
      }

      return _artikelName = _artikelID;
    }
  });
  Object.defineProperty(this, 'artikelPreis', {
    get: function get() {
      if (_artikelSonderPreis != undefined) return _artikelSonderPreis;
      return _artikelPreis;
    },
    set: function set(artikelPreis) {
      if (artikelPreis >= 0) return _artikelPreis = artikelPreis;
    },
    configurable: true
  });
  Object.defineProperty(this, 'artikelSonderPreis', {
    get: function get() {
      return _artikelSonderPreis;
    },
    set: function set(artikelSonderPreis) {
      if (artikelSonderPreis >= 0 || artikelSonderPreis == undefined) return _artikelSonderPreis = artikelSonderPreis;
    }
  }); //Public method

  this.isCheaperThan = function (artikel) {
    if (this.artikelPreis <= artikel.artikelPreis) {
      return true;
    }

    return false;
  };

  this.getId = function () {
    return this.artikelID;
  };
}