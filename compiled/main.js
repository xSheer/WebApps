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

define("Artikel", ["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Artikel =
  /*#__PURE__*/
  function () {
    function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) {
      _classCallCheck(this, Artikel);

      //Public methods
      this.isCheaperThan = function (artikel) {
        if (this.artikelPreis <= artikel._artikelPreis) {
          return true;
        }

        return false;
      };

      this.getId = function () {
        return this.artikelID;
      }; //# bei der Verwendung von privaten Varibalen


      this._artikelID = Math.random() * (+10 - +1) + 1;
      this.artikelBeschreibung = artikelBeschreibung;
      this._artikelPreis = artikelPreis;
      this._artikelSonderPreis = artikelSonderPreis;

      if (!artikelName) {
        this._artikelName = String(this._artikelID);
      } else {
        this._artikelName = artikelName;
      }
    }

    _createClass(Artikel, [{
      key: "artikelID",
      get: function get() {
        return this._artikelID;
      }
    }, {
      key: "artikelName",
      get: function get() {
        return this._artikelName;
      },
      set: function set(artikelName) {
        if (artikelName != '') {
          this._artikelName = artikelName;
        } else {
          this._artikelName = String(this._artikelID);
        }
      } //configurable: true as default for polyphormism

    }, {
      key: "artikelPreis",
      get: function get() {
        if (this._artikelSonderPreis != undefined) return this._artikelSonderPreis;
        return this._artikelPreis;
      },
      set: function set(artikelPreis) {
        if (artikelPreis >= 0) this._artikelPreis = artikelPreis;
      }
    }, {
      key: "artikelSonderPreis",
      get: function get() {
        return this._artikelSonderPreis;
      },
      set: function set(artikelSonderPreis) {
        if (artikelSonderPreis >= 0 || artikelSonderPreis == undefined) this._artikelSonderPreis = artikelSonderPreis;
      }
    }]);

    return Artikel;
  }();

  exports["default"] = Artikel;
});
define("Schuhe", ["require", "exports", "Artikel"], function (require, exports, Artikel_js_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Schuhe =
  /*#__PURE__*/
  function (_Artikel_js_1$default) {
    _inherits(Schuhe, _Artikel_js_1$default);

    function Schuhe(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke) {
      var _this;

      _classCallCheck(this, Schuhe);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Schuhe).call(this, artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis));
      _this._schuhGroesse = schuhGroesse;
      _this._schuhMarke = schuhMarke;
      _this._artikelPreis = artikelPreis;
      _this._artikelSonderPreis = artikelSonderPreis;
      return _this;
    }

    _createClass(Schuhe, [{
      key: "schuhGroesse",
      get: function get() {
        return this._schuhGroesse;
      }
    }, {
      key: "schuhMarke",
      get: function get() {
        return this._schuhMarke;
      },
      set: function set(schuhMarke) {
        this._schuhMarke = schuhMarke;
      }
    }, {
      key: "artikelSonderPreis",
      get: function get() {
        if (this._artikelSonderPreis != undefined) return this._artikelSonderPreis;
        return this._artikelPreis;
      },
      set: function set(artikelPreis) {
        if (artikelPreis >= 5) this._artikelPreis = artikelPreis;
      }
    }]);

    return Schuhe;
  }(Artikel_js_1["default"]);

  exports["default"] = Schuhe;
});
define("Verwaltung", ["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Verwaltung =
  /*#__PURE__*/
  function () {
    function Verwaltung() {
      _classCallCheck(this, Verwaltung);

      this.addArtikelsToList = function (newArtikel) {
        this.artikels.push(newArtikel);
        var counter = 0;

        while (counter < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
          this.artikels.push(counter + 1 < 1 || arguments.length <= counter + 1 ? undefined : arguments[counter + 1]);
          counter++;
        }
      };

      this.deleteArtikelsToList = function (oldArtikel) {
        //Get Index of oldArtikel
        var removeIndex = this.artikels.map(function (object) {
          return object.artikelID;
        }).indexOf(oldArtikel.artikelID); //remove oldArtikel by Index

        this.artikels.splice(removeIndex, 1);

        for (var _len = arguments.length, moreOldArtikels = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          moreOldArtikels[_key - 1] = arguments[_key];
        }

        for (var i = 0; i < moreOldArtikels.length; i++) {
          removeIndex = this.artikels.map(function (object) {
            return object.artikelID;
          }).indexOf(moreOldArtikels[i].artikelID);
          if (removeIndex !== -1) this.artikels.splice(removeIndex, 1);
        }
      };

      this.artikels = [];
    }

    _createClass(Verwaltung, [{
      key: "listArticles",
      get: function get() {
        return this.artikels;
      }
    }]);

    return Verwaltung;
  }();

  exports["default"] = Verwaltung;
});
define("modulVerwaltung", ["require", "exports", "Artikel", "Schuhe", "Verwaltung"], function (require, exports, Artikel_js_2, Schuhe_js_1, Verwaltung_js_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var artikel1 = new Artikel_js_2["default"]('Jeans', 'Asos Jeans', 139, 0);
  console.log(artikel1);
  var artikel2 = new Artikel_js_2["default"]('Pulli', 'Asos Pulli', 49, 39);
  console.log(artikel2);
  var artikel3 = new Schuhe_js_1["default"]('Schuhe', 'Nike Schuhe', 129, 0, 42, 'Nike');
  console.log(artikel3);
  var artikel4 = new Schuhe_js_1["default"]('Schuhe', 'Adidas Schuhe', 79, 0, 39, 'Adidas');
  console.log(artikel4);
  var verwaltung = new Verwaltung_js_1["default"]();
  verwaltung.addArtikelsToList(artikel1, artikel2, artikel3, artikel4);
  console.log(verwaltung.listArticles);
  verwaltung.deleteArtikelsToList(artikel1);
  console.log(verwaltung.listArticles);
});