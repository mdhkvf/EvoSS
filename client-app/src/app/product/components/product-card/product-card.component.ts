import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: IProduct;
}
