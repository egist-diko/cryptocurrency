import { Directive, HostBinding, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { CryptoCurrencyService } from '../cc.service';
import { CryptoCurrency } from './cryptocurrency.model';


@Directive({
    selector: '[Color]'
})
export class ColorDirective implements OnInit,OnDestroy{

    @Input('condition')condition: boolean ;
    @HostBinding('class') color ;
    sub1: Subscription;

    constructor(private ccservice: CryptoCurrencyService){}
    ngOnInit(){
        this.changeColor();
        this.sub1=this.ccservice.CCChanges
        .subscribe((CClist:CryptoCurrency[])=>{
           this.changeColor(); 
        })
        
    }

    changeColor(){
        if(this.condition===true){
            this.color='text-danger';
        }else{
            this.color='text-success'
        }
    }

    ngOnDestroy(){
        this.sub1.unsubscribe();
    }
}