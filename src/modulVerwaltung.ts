import Artikel from './Artikel.js';
import Schuhe from './Schuhe.js';
import Verwaltung from './Verwaltung.js';

let artikel1 = new Artikel('Jeans', 'Asos Jeans', 139, 0);
console.log(artikel1);

let artikel2 = new Artikel('Pulli', 'Asos Pulli', 49, 39);
console.log(artikel2);

let artikel3 = new Schuhe('Schuhe', 'Nike Schuhe', 129, 0, 42, 'Nike');
console.log(artikel3);

let artikel4 = new Schuhe('Schuhe', 'Adidas Schuhe', 79, 0, 39, 'Adidas');
console.log(artikel4);

let verwaltung = new Verwaltung();
verwaltung.addArtikelsToList(artikel1, artikel2, artikel3, artikel4);

console.log(verwaltung.listArticles);
verwaltung.deleteArtikelsToList(artikel1);
console.log(verwaltung.listArticles);