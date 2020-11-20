import { Component, Input, OnInit } from '@angular/core';
import { CryptoCurrencyService } from 'src/app/cc.service';

import { CryptoCurrency } from 'src/app/shared/cryptocurrency.model';

@Component({
  selector: 'crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css']
})
export class CryptoItemComponent implements OnInit {

  @Input() CCel : CryptoCurrency;
  conditioN : boolean;
  editPressed : boolean = false;


  constructor(private ccservice : CryptoCurrencyService) { }

  ngOnInit(): void {
    this.forColor();
  }
  onClick(CC : CryptoCurrency){
    this.ccservice.clickCC(CC);
  }

  onEdit(){
    if(this.editPressed===false){
      this.editPressed=true;
    }else{
      this.editPressed=false;
    }
  }

  forColor(){
    if(this.CCel.percent_change_usd_last_24_hours>0){
      this.conditioN=false;
    }else{
      this.conditioN=true;
    }
  }



}
