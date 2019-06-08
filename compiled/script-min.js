"use strict";

function Artikel(t, e, i, r) {
  var n = 9 * Math.random() + 1,
      u = t;
  this.artikelBeschreibung = e;
  var s = i,
      l = r;
  this.implementsInterfaces = ["Compareable"], 0 == arguments.length ? this._artikelName = n : this._artikelName = t, Object.defineProperty(this, "artikelID", {
    get: function get() {
      return n;
    }
  }), Object.defineProperty(this, "artikelName", {
    get: function get() {
      return u;
    },
    set: function set(t) {
      return u = "" != t ? t : n;
    }
  }), Object.defineProperty(this, "artikelPreis", {
    get: function get() {
      return null != l ? l : s;
    },
    set: function set(t) {
      if (t >= 0) return s = t;
    },
    configurable: !0
  }), Object.defineProperty(this, "artikelSonderPreis", {
    get: function get() {
      return l;
    },
    set: function set(t) {
      if (t >= 0 || null == t) return l = t;
    }
  }), this.isCheaperThan = function (t) {
    return this.artikelPreis <= t.artikelPreis;
  }, this.getId = function () {
    return this.artikelID;
  };
}

function Schuhe(t, e, i, r, n, u) {
  Artikel.call(this, t, e, i, r);
  var s = n,
      l = u,
      o = i,
      c = r;
  Object.defineProperty(this, "schuhGroesse", {
    get: function get() {
      return s;
    }
  }), Object.defineProperty(this, "schuhMarke", {
    get: function get() {
      return l;
    },
    set: function set(t) {
      return l = t;
    }
  }), Object.defineProperty(this, "artikelPreis", {
    get: function get() {
      return null != c ? c : o;
    },
    set: function set(t) {
      if (t >= 5) return o = t;
    }
  });
}

function Verwaltung() {
  var t = [];
  this.listArticles = function () {
    return t;
  }, this.addArtikelsToList = function (e) {
    t.push(e);
    var r = 0;

    for (; r < (arguments.length <= 1 ? 0 : arguments.length - 1);) {
      t.push(r + 1 < 1 || arguments.length <= r + 1 ? undefined : arguments[r + 1]), r++;
    }
  }, this.deleteArtikelsToList = function (e) {
    var r = t.map(function (t) {
      return t.artikelID;
    }).indexOf(e.artikelID);
    t.splice(r, 1);

    for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      i[_key - 1] = arguments[_key];
    }

    for (var n = 0; n < i.length; n++) {
      -1 !== (r = t.map(function (t) {
        return t.artikelID;
      }).indexOf(i[n].artikelID)) && t.splice(r, 1);
    }
  };
}

module.exports = Artikel;