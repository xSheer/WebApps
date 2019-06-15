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
import Artikel from './Artikel';
var Schuhe = (function (_super) {
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
}(Artikel));
export default Schuhe;
