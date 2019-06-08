function Schuhe(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis, schuhGroesse, schuhMarke){
    Artikel.call(this, artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis);
    let _schuhGroesse = schuhGroesse;
    let _schuhMarke = schuhMarke;
    let _artikelPreis = artikelPreis;
    let _artikelSonderPreis = artikelSonderPreis;

    Object.defineProperty(this, 'schuhGroesse', {
        get: function(){
            return _schuhGroesse;
        }
    });

    Object.defineProperty(this, 'schuhMarke', {
        get: function(){
            return _schuhMarke;
        },
        set: function(schuhMarke){
        return _schuhMarke = schuhMarke;
        }
    });

    Object.defineProperty(this, 'artikelPreis', {
        get: function(){
            if(_artikelSonderPreis != undefined)
                return _artikelSonderPreis;
            return _artikelPreis;
        },
        set: function(artikelPreis){
            if(artikelPreis >= 5)
                return _artikelPreis = artikelPreis;
        }
    });
}

export {Schuhe};