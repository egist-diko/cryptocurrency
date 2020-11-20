import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoCurrencyService } from '../cc.service';
import { CryptoCurrency } from '../shared/cryptocurrency.model';

@Component({
  selector: 'crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit , OnDestroy {

  CCList : CryptoCurrency[];
  sub1 : Subscription;
  interval : any;
  
  constructor(private ccservice : CryptoCurrencyService) {}

  ngOnInit(): void {

    this.ccservice.getACrypto("btc")
    .subscribe(data=>{
      const valuename = data.data.name;
      const valuesymbol = data.data.symbol;
      const valueimg = "https://messari.io/asset-images/"+data.data.id+"/128.png?v=2";
      const valueusd = data.data.market_data.price_usd;
      const valueper = data.data.market_data.percent_change_usd_last_24_hours;
      this.ccservice.addCC(valuename,valuesymbol,valueimg,valueusd,valueper);
    })

    this.interval = setInterval(() => { 
      console.log(this.interval);
      this.OnReload();
  }, 5000);

    this.sub1=this.ccservice.CCChanges
    .subscribe((CClist : CryptoCurrency[])=>{
      this.CCList=CClist;
    })
  }

  OnReload(){
    this.ccservice.updateCCList();
  }

  ngOnDestroy(){
    this.sub1.unsubscribe();
    clearInterval(this.interval);
  }

}
