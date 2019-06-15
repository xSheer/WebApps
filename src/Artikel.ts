interface Compareable{
    //Public methods
    isCheaperThan(artikel:Artikel):boolean;
}

export default class Artikel implements Compareable{

    private artikelBeschreibung:string;
    private _artikelID:number;
    private _artikelName:string;
    protected _artikelPreis:number;
    protected _artikelSonderPreis:number;

    constructor(artikelName:string, artikelBeschreibung:string, artikelPreis:number, artikelSonderPreis:number){
        //# bei der Verwendung von privaten Varibalen
        this._artikelID = Math.random() * (+10 - +1) + 1; 
        this.artikelBeschreibung = artikelBeschreibung;
        this._artikelPreis = artikelPreis;
        this._artikelSonderPreis = artikelSonderPreis;
        
        if(!artikelName){
            this._artikelName = String(this._artikelID);
        } else {
            this._artikelName = artikelName;
        }
    }

    get artikelID():number{
        return this._artikelID;
    }

    get artikelName():string{
        return this._artikelName;
    }

    set artikelName(artikelName:string){
        if(artikelName != ''){
            this._artikelName = artikelName;
        }else {
            this._artikelName = String(this._artikelID);
        }
    }

    //configurable: true as default for polyphormism
    get artikelPreis():number{
        if(this._artikelSonderPreis != undefined)
            return this._artikelSonderPreis;
        return this._artikelPreis;
    }

    set artikelPreis(artikelPreis:number){
        if(artikelPreis >= 0)
            this._artikelPreis = artikelPreis;
    }

    get artikelSonderPreis():number{
        return this._artikelSonderPreis;
    } 
    
    set artikelSonderPreis(artikelSonderPreis:number){
        if(artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
            this._artikelSonderPreis = artikelSonderPreis;
    }
    
    //Public methods
    isCheaperThan = function(artikel:Artikel):boolean{
        if(this.artikelPreis <= artikel._artikelPreis){
            return true;
        }
        return false;
    };

    protected getId = function():number{
        return this.artikelID;
    };
}