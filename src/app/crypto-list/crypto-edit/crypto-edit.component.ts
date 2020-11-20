import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { CryptoCurrencyService } from 'src/app/cc.service';

@Component({
  selector: 'crypto-edit',
  templateUrl: './crypto-edit.component.html',
  styleUrls: ['./crypto-edit.component.css']
})
export class CryptoEditComponent implements OnInit {

  @ViewChild('f') form : NgForm;
  
  constructor(private ccservice: CryptoCurrencyService) { }

  ngOnInit(): void {
  }

  onAdd(form : NgForm){
    const value = form.value;
    this.ccservice.getACrypto(value.name)
    .subscribe(data=>{
      const valuename = data.data.name;
      const valuesymbol = data.data.symbol;
      const valueimg = "https://messari.io/asset-images/"+data.data.id+"/128.png?v=2";
      const valueusd = data.data.market_data.price_usd;
      const valueper = data.data.market_data.percent_change_usd_last_24_hours;
      this.ccservice.addCC(valuename,valuesymbol,valueimg,valueusd,valueper);
    })
  }

  onDelete(){
    this.ccservice.deleteCC();
  }

}
