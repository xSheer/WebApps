export default function Artikel(artikelName, artikelBeschreibung, artikelPreis, artikelSonderPreis){

    //# bei der Verwendung von privaten Varibalen
    let _artikelID:number = Math.random() * (+10 - +1) + 1; 
    let _artikelName:string = artikelName;
    this.artikelBeschreibung = artikelBeschreibung;
    let _artikelPreis:number = artikelPreis;
    let _artikelSonderPreis:number = artikelSonderPreis;
    this.implementsInterfaces = ['Compareable'];

    if(arguments.length == 0){
        this._artikelName = _artikelID;
    }else {
        this._artikelName = artikelName;
    }

    Object.defineProperty(this, 'artikelID', {
        get: function(){
            return _artikelID;
        }
    });

    Object.defineProperty(this, 'artikelName', {
        get: function(){
            return _artikelName;
        },
        set: function(artikelName){
            if(artikelName != ''){
                return _artikelName = artikelName;
            }
            return _artikelName = String(_artikelID);
        }
    });

    Object.defineProperty(this, 'artikelPreis', {
        get: function(){
            if(_artikelSonderPreis != undefined)
                return _artikelSonderPreis;
            return _artikelPreis;
        },
        set: function(artikelPreis){
            if(artikelPreis >= 0)
                return _artikelPreis = artikelPreis;
        },
        configurable: true
    });

    Object.defineProperty(this, 'artikelSonderPreis', {
        get: function(){
            return _artikelSonderPreis;
        },
        set: function(artikelSonderPreis){
            if(artikelSonderPreis >= 0 || artikelSonderPreis == undefined)
                return _artikelSonderPreis = artikelSonderPreis;
        }
    });

    //Public method
    this.isCheaperThan = function(artikel):boolean{
        if(this.artikelPreis <= artikel.artikelPreis){
            return true;
        }
        return false;
    };

    this.getId = function():number{
        return this.artikelID;
    };
}