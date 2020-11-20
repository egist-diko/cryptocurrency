import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CryptoCurrency } from './shared/cryptocurrency.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class CryptoCurrencyService{
    CCChanges = new Subject<CryptoCurrency[]>();

    private baseUrl = 'https://data.messari.io/api/v1/assets';

    constructor(private http: HttpClient){}

    private CCList : CryptoCurrency[] = [];
    private selectedCC : CryptoCurrency[] = [];
    public b : boolean = false;


    getCC(){
        return this.CCList.slice();
    }

    getACrypto(name:String):Observable<any>{
        return this.http.get(`${this.baseUrl}/${name}/metrics`);
    }

    addCC(name: string , symbol: string , img: string , usd: number , per: number){
        this.CCList.forEach(item =>{
            if(item.name===name){
                this.b=true;
            }
        })
        if(this.b===true){
            //send a message to user for future work
        }else{
            this.CCList.push(new CryptoCurrency(name,symbol,img,usd,per));
            this.CCChanges.next(this.CCList.slice());
        }
        this.b=false;
    }

    updateCCList(){
        this.CCList.forEach(item =>{
            this.getACrypto(item.name).subscribe(data =>{
                console.log(item.name);
                console.log(data.data.market_data.price_usd);
                console.log(data.data.market_data.percent_change_usd_last_24_hours);
                const valueusd = data.data.market_data.price_usd;
                const valueper = data.data.market_data.percent_change_usd_last_24_hours;
                item.price_usd=valueusd;
                item.percent_change_usd_last_24_hours=valueper;
            })
        })
        this.CCChanges.next(this.CCList.slice());
    }

    deleteCC(){
        for(let i in this.selectedCC){
            if(this.CCList.includes(this.selectedCC[i])){
                let j = this.CCList.indexOf(this.selectedCC[i]);
                this.CCList.splice(j,1);
            }
        }
        this.CCChanges.next(this.CCList.slice());
    }
        
    clickCC(cc: CryptoCurrency){
        if(this.selectedCC.includes(cc)){
             let i = this.selectedCC.indexOf(cc)
             this.selectedCC.splice(i,1);
        }else{
             this.selectedCC.push(cc);
         }
    }
}
