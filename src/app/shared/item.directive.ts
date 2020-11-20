import { Directive, HostBinding, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appItem]'
})
export class ItemDirective{

    @HostBinding('class') background = '';
    @Input('editable')edit: boolean;

    @HostListener('click') changeColor()
    {
        if(this.edit===false){
            if(this.background===''){
                this.background='bg-danger'
            }else{
                this.background=''
            }   
        }else{
            this.background='';
        }
    }
}