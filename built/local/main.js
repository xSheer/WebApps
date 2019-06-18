var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("Artikel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Artikel = /** @class */ (function () {
        function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) {
            //Public methods
            this.isCheaperThan = function (artikel) {
                if (this.artikelPreis <= artikel._artikelPreis) {
                    return true;
                }
                return false;
            };
            this.getId = function () {
                return this.artikelID;
            };
            //# bei der Verwendung von privaten Varibalen
            this._artikelID = Math.random() * (+10 - +1) + 1;
            this.artikelBeschreibung = artikelBeschreibung;
            this._artikelPreis = artikelPreis;
            this._artikelSonderPreis = artikelSonderPreis;
            if (!artikelName) {
                this._artikelName = String(this._artikelID);
            }
            else {
                this._artikelName = artikelName;
            }
        }
        Object.defineProperty(Artikel.prototype, "artikelID", {
            get: function () {
                return this._artikelID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Artikel.prototype, "artikelName", {
            get: function () {
                return this._artikelName;
            },
            set: function (artikelName) {
                if (artikelName != '') {
                    this._artikelName = artikelName;
                }
                else {
                    this._artikelName = String(this._artikelID);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Artikel.prototype, "artikelPreis", {
            //configurable: true as default for polyphormism
            get: function () {
                if (this._artikelSonderPreis != undefined)
                    return this._artikelSonderPreis;
                return this._artikelPreis;
            },
            set: function (artikelPreis) {
                if (artikelPreis >= 0)
                    this._artikelPreis = artikelPreis;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Artikel.prototype, "artikelSonderPreis", {
            get: function () {
                return this._artikelSonderPreis;
            },
            set: function (artikelSonderPreis) {
                if (artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
                    this._artikelSonderPreis = artikelSonderPreis;
            },
            enumerable: true,
            configurable: true
        });
        return Artikel;
    }());
    exports.default = Artikel;
});
define("Schuhe", ["require", "exports", "Artikel"], function (require, exports, Artikel_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Schuhe = /** @class */ (function (_super) {
        __extends(Schuhe, _super);
        function Schuhe(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke) {
            var _this = _super.call(this, artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis) || this;
            _this._schuhGroesse = schuhGroesse;
            _this._schuhMarke = schuhMarke;
            _this._artikelPreis = artikelPreis;
            _this._artikelSonderPreis = artikelSonderPreis;
            return _this;
        }
        Object.defineProperty(Schuhe.prototype, "schuhGroesse", {
            get: function () {
                return this._schuhGroesse;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Schuhe.prototype, "schuhMarke", {
            get: function () {
                return this._schuhMarke;
            },
            set: function (schuhMarke) {
                this._schuhMarke = schuhMarke;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Schuhe.prototype, "artikelSonderPreis", {
            get: function () {
                if (this._artikelSonderPreis != undefined)
                    return this._artikelSonderPreis;
                return this._artikelPreis;
            },
            set: function (artikelPreis) {
                if (artikelPreis >= 5)
                    this._artikelPreis = artikelPreis;
            },
            enumerable: true,
            configurable: true
        });
        return Schuhe;
    }(Artikel_js_1.default));
    exports.default = Schuhe;
});
define("Verwaltung", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Verwaltung = /** @class */ (function () {
        function Verwaltung() {
            this.addArtikelsToList = function (newArtikel) {
                var moreArtikels = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    moreArtikels[_i - 1] = arguments[_i];
                }
                this.artikels.push(newArtikel);
                var counter = 0;
                while (counter < moreArtikels.length) {
                    this.artikels.push(moreArtikels[counter]);
                    counter++;
                }
            };
            this.deleteArtikelsToList = function (oldArtikel) {
                var moreOldArtikels = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    moreOldArtikels[_i - 1] = arguments[_i];
                }
                //Get Index of oldArtikel
                var removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(oldArtikel.artikelID);
                //remove oldArtikel by Index
                this.artikels.splice(removeIndex, 1);
                for (var i = 0; i < moreOldArtikels.length; i++) {
                    removeIndex = this.artikels.map(function (object) { return object.artikelID; }).indexOf(moreOldArtikels[i].artikelID);
                    if (removeIndex !== -1)
                        this.artikels.splice(removeIndex, 1);
                }
            };
            this.artikels = [];
        }
        Object.defineProperty(Verwaltung.prototype, "listArticles", {
            get: function () {
                return this.artikels;
            },
            enumerable: true,
            configurable: true
        });
        ;
        return Verwaltung;
    }());
    exports.default = Verwaltung;
});
define("modulVerwaltung", ["require", "exports", "Artikel", "Schuhe", "Verwaltung"], function (require, exports, Artikel_js_2, Schuhe_js_1, Verwaltung_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var artikel1 = new Artikel_js_2.default('Jeans', 'Asos Jeans', 139, 0);
    console.log(artikel1);
    var artikel2 = new Artikel_js_2.default('Pulli', 'Asos Pulli', 49, 39);
    console.log(artikel2);
    var artikel3 = new Schuhe_js_1.default('Schuhe', 'Nike Schuhe', 129, 0, 42, 'Nike');
    console.log(artikel3);
    var artikel4 = new Schuhe_js_1.default('Schuhe', 'Adidas Schuhe', 79, 0, 39, 'Adidas');
    console.log(artikel4);
    var verwaltung = new Verwaltung_js_1.default();
    verwaltung.addArtikelsToList(artikel1, artikel2, artikel3, artikel4);
    console.log(verwaltung.listArticles);
    verwaltung.deleteArtikelsToList(artikel1);
    console.log(verwaltung.listArticles);
});
