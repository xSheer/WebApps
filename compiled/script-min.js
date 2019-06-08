"use strict";

function Artikel(e, t, i, r) {
  var l = 9 * Math.random() + 1,
      n = e;
  this.artikelBeschreibung = t;
  var s = i,
      o = r;
  this.implementsInterfaces = ["Compareable"], 0 == arguments.length ? this._artikelName = l : this._artikelName = e, Object.defineProperty(this, "artikelID", {
    get: function get() {
      return l;
    }
  }), Object.defineProperty(this, "artikelName", {
    get: function get() {
      return n;
    },
    set: function set(e) {
      return n = "" != e ? e : l;
    }
  }), Object.defineProperty(this, "artikelPreis", {
    get: function get() {
      return null != o ? o : s;
    },
    set: function set(e) {
      if (e >= 0) return s = e;
    },
    configurable: !0
  }), Object.defineProperty(this, "artikelSonderPreis", {
    get: function get() {
      return o;
    },
    set: function set(e) {
      if (e >= 0 || null == e) return o = e;
    }
  }), this.isCheaperThan = function (e) {
    return this.artikelPreis <= e.artikelPreis;
  }, this.getId = function () {
    return this.artikelID;
  };
}

function Schuhe(e, t, i, r, l, n) {
  Artikel.call(this, e, t, i, r);
  var s = l,
      o = n,
      u = i,
      c = r;
  Object.defineProperty(this, "schuhGroesse", {
    get: function get() {
      return s;
    }
  }), Object.defineProperty(this, "schuhMarke", {
    get: function get() {
      return o;
    },
    set: function set(e) {
      return o = e;
    }
  }), Object.defineProperty(this, "artikelPreis", {
    get: function get() {
      return null != c ? c : u;
    },
    set: function set(e) {
      if (e >= 5) return u = e;
    }
  });
}

function Verwaltung() {
  var e = [];
  this.listArticles = function () {
    return e;
  }, this.addArtikelsToList = function (t) {
    e.push(t);
    var r = 0;

    for (; r < (arguments.length <= 1 ? 0 : arguments.length - 1);) {
      e.push(r + 1 < 1 || arguments.length <= r + 1 ? undefined : arguments[r + 1]), r++;
    }
  }, this.deleteArtikelsToList = function (t) {
    var r = e.map(function (e) {
      return e.artikelID;
    }).indexOf(t.artikelID);
    e.splice(r, 1);

    for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      i[_key - 1] = arguments[_key];
    }

    for (var l = 0; l < i.length; l++) {
      -1 !== (r = e.map(function (e) {
        return e.artikelID;
      }).indexOf(i[l].artikelID)) && e.splice(r, 1);
    }
  };
}

var artikel1 = new Artikel("Jeans", "Asos Jeans", 139),
    artikel2 = new Artikel("Pulli", "Asos Pulli", 49, 39);
console.log(artikel1);
var schuh1 = new Schuhe("Schuh", "New Nikes", 119, 79, 42, "Nike"),
    schuh2 = new Schuhe("Schuh", "New Adidias", 79, void 0, 42, "Adidias");
console.log(schuh1), console.log(schuh1.artikelID);
var verwaltung = new Verwaltung();
console.log(verwaltung.listArticles()), verwaltung.addArtikelsToList(schuh1), console.log(verwaltung.listArticles()), verwaltung.addArtikelsToList(schuh2, artikel1, artikel2), console.log(verwaltung.listArticles()), verwaltung.deleteArtikelsToList(schuh1), console.log(verwaltung.listArticles()), verwaltung.deleteArtikelsToList(artikel1, artikel2), console.log(verwaltung.listArticles());
var test = 10;
console.log(test);

var es2016 = function es2016() {
  return "Hallo World";
};