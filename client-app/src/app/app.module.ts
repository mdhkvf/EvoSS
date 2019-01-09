import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ProductModule } from './product/product.module';
import { SearchModule } from './search/search.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductModule,
    SearchModule, 
    AccountModule,
    LayoutModule //keep LayoutModule last for wildcard routing to work correctly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
