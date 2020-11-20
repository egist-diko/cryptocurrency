import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoEditComponent } from './crypto-list/crypto-edit/crypto-edit.component';
import { CryptoItemComponent } from './crypto-list/crypto-item/crypto-item.component';
import { ColorDirective } from './shared/color.directive';
import { HttpClientModule } from '@angular/common/http';
import { ItemDirective } from './shared/item.directive';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoEditComponent,
    ColorDirective,
    ItemDirective,
    CryptoItemComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
