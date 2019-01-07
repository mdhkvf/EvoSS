import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductSliderComponent, ProductCardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'product', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  exports: [
    ProductDetailComponent,
    ProductSliderComponent
  ]
})
export class ProductModule { }
