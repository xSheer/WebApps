"use strict";

function Schuhe(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke) {
  Artikel.call(this, artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis);
  var _schuhGroesse = schuhGroesse;
  var _schuhMarke = schuhMarke;
  var _artikelPreis = artikelPreis;
  var _artikelSonderPreis = artikelSonderPreis;
  Object.defineProperty(this, 'schuhGroesse', {
    get: function get() {
      return _schuhGroesse;
    }
  });
  Object.defineProperty(this, 'schuhMarke', {
    get: function get() {
      return _schuhMarke;
    },
    set: function set(schuhMarke) {
      return _schuhMarke = schuhMarke;
    }
  });
  Object.defineProperty(this, 'artikelPreis', {
    get: function get() {
      if (_artikelSonderPreis != undefined) return _artikelSonderPreis;
      return _artikelPreis;
    },
    set: function set(artikelPreis) {
      if (artikelPreis >= 5) return _artikelPreis = artikelPreis;
    }
  });
}