export class CryptoCurrency {
    public name : string;
    public symbol : string;
    public imageURL : string;
    public price_usd : number;
    public percent_change_usd_last_24_hours : number;

    constructor(name : string , symbol : string , imageURL : string , price_usd : number , percent_change_usd_last_24_hours : number){
        this.name = name;
        this.symbol = symbol;
        this.imageURL = imageURL;
        this.price_usd= price_usd;
        this.percent_change_usd_last_24_hours = percent_change_usd_last_24_hours;
    }
}