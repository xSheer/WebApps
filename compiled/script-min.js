"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define("Artikel", ["require", "exports"], function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] =
  /*#__PURE__*/
  function () {
    function _class(e, t, i, r) {
      _classCallCheck(this, _class);

      this.isCheaperThan = function (e) {
        return this.artikelPreis <= e._artikelPreis;
      }, this.getId = function () {
        return this.artikelID;
      }, this._artikelID = 9 * Math.random() + 1, this.artikelBeschreibung = t, this._artikelPreis = i, this._artikelSonderPreis = r, this._artikelName = e || String(this._artikelID);
    }

    _createClass(_class, [{
      key: "artikelID",
      get: function get() {
        return this._artikelID;
      }
    }, {
      key: "artikelName",
      get: function get() {
        return this._artikelName;
      },
      set: function set(e) {
        this._artikelName = "" != e ? e : String(this._artikelID);
      }
    }, {
      key: "artikelPreis",
      get: function get() {
        return null != this._artikelSonderPreis ? this._artikelSonderPreis : this._artikelPreis;
      },
      set: function set(e) {
        e >= 0 && (this._artikelPreis = e);
      }
    }, {
      key: "artikelSonderPreis",
      get: function get() {
        return this._artikelSonderPreis;
      },
      set: function set(e) {
        (e >= 0 || null == e) && (this._artikelSonderPreis = e);
      }
    }]);

    return _class;
  }();
}), define("Schuhe", ["require", "exports", "Artikel"], function (e, t, i) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] =
  /*#__PURE__*/
  function (_i$default) {
    _inherits(_class2, _i$default);

    function _class2(e, t, i, r, s, l) {
      var _this;

      _classCallCheck(this, _class2);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, e, t, i, r)), _this._schuhGroesse = s, _this._schuhMarke = l, _this._artikelPreis = i, _this._artikelSonderPreis = r;
      return _this;
    }

    _createClass(_class2, [{
      key: "schuhGroesse",
      get: function get() {
        return this._schuhGroesse;
      }
    }, {
      key: "schuhMarke",
      get: function get() {
        return this._schuhMarke;
      },
      set: function set(e) {
        this._schuhMarke = e;
      }
    }, {
      key: "artikelSonderPreis",
      get: function get() {
        return null != this._artikelSonderPreis ? this._artikelSonderPreis : this._artikelPreis;
      },
      set: function set(e) {
        e >= 5 && (this._artikelPreis = e);
      }
    }]);

    return _class2;
  }(i["default"]);
}), define("Verwaltung", ["require", "exports"], function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] =
  /*#__PURE__*/
  function () {
    function _class3() {
      _classCallCheck(this, _class3);

      this.addArtikelsToList = function (e) {
        this.artikels.push(e);
        var i = 0;

        for (; i < (arguments.length <= 1 ? 0 : arguments.length - 1);) {
          this.artikels.push(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]), i++;
        }
      }, this.deleteArtikelsToList = function (e) {
        var i = this.artikels.map(function (e) {
          return e.artikelID;
        }).indexOf(e.artikelID);
        this.artikels.splice(i, 1);

        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        for (var r = 0; r < t.length; r++) {
          -1 !== (i = this.artikels.map(function (e) {
            return e.artikelID;
          }).indexOf(t[r].artikelID)) && this.artikels.splice(i, 1);
        }
      }, this.artikels = [];
    }

    _createClass(_class3, [{
      key: "listArticles",
      get: function get() {
        return this.artikels;
      }
    }]);

    return _class3;
  }();
}), define("modulVerwaltung", ["require", "exports", "Artikel", "Schuhe", "Verwaltung"], function (e, t, i, r, s) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var l = new i["default"]("Jeans", "Asos Jeans", 139, 0);
  console.log(l);
  var a = new i["default"]("Pulli", "Asos Pulli", 49, 39);
  console.log(a);
  var n = new r["default"]("Schuhe", "Nike Schuhe", 129, 0, 42, "Nike");
  console.log(n);
  var h = new r["default"]("Schuhe", "Adidas Schuhe", 79, 0, 39, "Adidas");
  console.log(h);
  var u = new s["default"]();
  u.addArtikelsToList(l, a, n, h), console.log(u.listArticles()), u.deleteArtikelsToList(l), console.log(u.listArticles()), console.log("TEST2dff");
});