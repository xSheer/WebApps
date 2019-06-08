import artikel from './Artikel.js';

let ModulVerwaltung = (function(){
    return {
        Artikel: artikel, //=require Artikel.js,
        Schuhe: Schuhe,
        Verwaltung: Verwaltung       
    }
})();

//let test = new artikel('sdfsdf', 'sdfsfd', 23);
console.log("test");