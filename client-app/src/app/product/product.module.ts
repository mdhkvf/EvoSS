import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductSliderComponent, ProductCardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
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
