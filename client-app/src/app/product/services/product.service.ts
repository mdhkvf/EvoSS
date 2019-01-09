import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApiEndpoint = 'http://evoss.daakon.com/api/products/';

  constructor(private http: HttpClient) { }

  public GetProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.productApiEndpoint + productId);
  }

  public GetProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productApiEndpoint);
  }  
}
