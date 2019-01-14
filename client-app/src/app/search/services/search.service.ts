import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/product/interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsArrayPayload } from '../../product/payloads/products.payload'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultsApiEndpoint = 'http://evoss.daakon.com/api/products/';

  constructor(
    private http: HttpClient
  ) { }

  public getSearchSuggestions(query: string): string[] {
    //TODO implement real logic
    let strList: string[] = [
      "is this it?",
      "how bout this?",
      "thats all i got"
    ]

    let rtnList: string[] = [];
    for (let x = 0; x < strList.length; x++) {
      if (strList[x].includes(query))
      {
        rtnList.push(strList[x]);
      }
    }

    return rtnList;
  }

  public getSearchResults(query: string): Observable<ProductsArrayPayload> {
    return this.http.get<ProductsArrayPayload>(this.searchResultsApiEndpoint);
  }
}
