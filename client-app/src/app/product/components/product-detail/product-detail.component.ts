import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct = null;

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute
    ) { 
  }

  ngOnInit() {
    let productId: number = this.activatedRoute.snapshot.params['id'];
    this.productService.GetProduct(productId).subscribe(
      product => this.product = product.data
    );    
  }

}
