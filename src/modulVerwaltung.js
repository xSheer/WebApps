import artikel from './Artikel.js';

let ModulVerwaltung = (function(){
    return {
        Artikel: artikel, //=require Artikel.js,
        Schuhe: Schuhe,
        Verwaltung: Verwaltung       
    }
})();

let test = new artikel.Artikel();
console.log(test);