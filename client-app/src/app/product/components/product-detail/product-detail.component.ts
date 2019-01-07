import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct = null;

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
    this.productService.GetProduct(3).subscribe(
      product => this.product = product
    );    
  }

}
