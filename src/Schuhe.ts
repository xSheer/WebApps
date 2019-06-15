import Artikel from './Artikel.js';

export default class Schuhe extends Artikel{

    private _schuhGroesse:number;
    private _schuhMarke:string;
    protected _artikelPreis:number;
    protected _artikelSonderPreis:number;


    constructor(artikelName:string, artikelBeschreibung:string, artikelPreis:number, 
                artikelSonderPreis:number, schuhGroesse:number, schuhMarke:string){
        super(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis);
        this._schuhGroesse = schuhGroesse;
        this._schuhMarke = schuhMarke;
        this._artikelPreis = artikelPreis;
        this._artikelSonderPreis = artikelSonderPreis;
    }

    get schuhGroesse():number{
        return this._schuhGroesse;
    }

    get schuhMarke():string{
        return this._schuhMarke;
    }

    set schuhMarke(schuhMarke:string){
        this._schuhMarke = schuhMarke;
    }

    get artikelSonderPreis():number{
        if(this._artikelSonderPreis != undefined)
            return this._artikelSonderPreis;
        return this._artikelPreis;
    } 

    set artikelSonderPreis(artikelPreis:number){
        if(artikelPreis >= 5)
            this._artikelPreis = artikelPreis;
    }
}