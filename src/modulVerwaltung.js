import artikel from './Artikel';

let ModulVerwaltung = (function(){
    return {
        Artikel: artikel, //=require Artikel.js,
        Schuhe: Schuhe,
        Verwaltung: Verwaltung       
    }
})();